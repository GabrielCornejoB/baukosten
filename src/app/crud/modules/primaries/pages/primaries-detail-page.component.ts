import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { PrimariesService } from '../primaries.service';
import { PrimarySupplier } from '../interfaces/primary-supplier.interface';

@Component({
  selector: 'primaries-detail-page',
  template: ` <crud-header [title]="'Suppliers of ' + primary" />
    <crud-table [tableData]="primarySuppliers" />`,
})
export class PrimariesDetailPageComponent implements OnInit {
  private aRoute = inject(ActivatedRoute);
  private router = inject(Router);
  private primariesService = inject(PrimariesService);

  public primary?: string;
  public primarySuppliers: PrimarySupplier[] = [];

  ngOnInit(): void {
    this.aRoute.params
      .pipe(switchMap(({ id }) => this.primariesService.getOne(id)))
      .subscribe((item) => {
        if (!item) return this.router.navigateByUrl('/crud/primaries/list');
        this.primary = item.primary;
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
