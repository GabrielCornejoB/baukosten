import { Component, OnInit, inject } from '@angular/core';
import { PrimariesService } from '../primaries.service';
import { Primary } from '../interfaces/primary.interface';
import { map } from 'rxjs';

@Component({
  selector: 'primaries-list-page',
  template: `
    <crud-header title="Primary Supplies" />
    <crud-table
      [tableData]="primaries"
      [hasDetailView]="true"
      detailViewText="Suppliers"
      (onDelete)="deletePrimary($event)"
    />
  `,
  styles: [],
})
export class PrimariesListPageComponent implements OnInit {
  private primariesService = inject(PrimariesService);

  public primaries: Primary[] = [];

  ngOnInit(): void {
    this.getPrimaries();
  }

  private getPrimaries(): void {
    this.primariesService
      .getAll()
      .pipe(
        map(({ items }) =>
          items.map((primary) => {
            return {
              id: primary.id,
              primary: primary.primary,
              unit: primary.expand.unit.unit,
              classification: primary.expand.classification.classification,
              default_supplier:
                primary.expand.default_primary_supplier?.expand.supplier
                  .supplier ?? 'n/a',
              default_price:
                primary.expand.default_primary_supplier?.unit_price,
            };
          })
        )
      )
      .subscribe((primaries) => (this.primaries = primaries));
  }

  public deletePrimary(id: string): void {
    this.primariesService.delete(id).subscribe((deletedSuccesfully) => {
      return deletedSuccesfully
        ? (this.primaries = this.primaries.filter((p) => id !== p.id))
        : console.log('error');
    });
  }
}
