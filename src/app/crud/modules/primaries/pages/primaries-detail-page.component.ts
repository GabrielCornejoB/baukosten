import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { PrimariesService } from '../primaries.service';
import { PrimarySupplier } from '../interfaces/primary-supplier.interface';
import { Primary } from '../interfaces/primary.interface';

@Component({
  selector: 'primaries-detail-page',
  template: ` <crud-header [title]="'Suppliers of ' + primary?.primary" />
    <crud-detail-info [detailData]="primary" />
    <div class="divider"></div>
    <crud-table [tableData]="primarySuppliers" />`,
})
export class PrimariesDetailPageComponent implements OnInit {
  private aRoute = inject(ActivatedRoute);
  private router = inject(Router);
  private primariesService = inject(PrimariesService);

  public primary?: Primary;
  public primarySuppliers: PrimarySupplier[] = [];

  ngOnInit(): void {
    this.getPrimary();
  }

  private getPrimary(): void {
    this.aRoute.params
      .pipe(switchMap(({ id }) => this.primariesService.getOne(id)))
      .subscribe((item) => {
        if (!item) return this.router.navigateByUrl('/crud/primaries/list');

        this.primary = {
          id: item.id,
          primary: item.primary,
          unit: item.expand.unit.unit,
          classification: item.expand.classification.classification,
          default_supplier:
            item.expand.default_primary_supplier?.expand.supplier.supplier ??
            'n/a',
          default_price: item.expand.default_primary_supplier?.unit_price,
        };
        console.log(this.primary);
        this.getSuppliers(item.id);
        return;
      });
  }

  private getSuppliers(primaryId: string): void {
    if (this.primary)
      this.primariesService
        .getSuppliers(primaryId)
        .pipe(
          map(({ items }) =>
            items.map((ps) => ({
              id: ps.id,
              supplier: ps.expand.supplier.supplier,
              unit_price: ps.unit_price,
              updated: ps.updated.slice(0, 10),
            }))
          )
        )
        .subscribe(
          (primarySuppliers) => (this.primarySuppliers = primarySuppliers)
        );
  }
}
