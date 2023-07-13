import { Component, OnInit, inject } from '@angular/core';
import { SuppliersService } from './suppliers.service';
import { Supplier } from './supplier.interface';
import { map } from 'rxjs';

@Component({
  selector: 'suppliers-list-page',
  template: `
    <crud-header title="Suppliers" />
    <crud-table [tableData]="suppliers" />
  `,
})
export class SuppliersListPageComponent implements OnInit {
  private suppliersService = inject(SuppliersService);

  public suppliers: Supplier[] = [];

  ngOnInit(): void {
    this.suppliersService
      .getAll()
      .pipe(
        map(({ items }) =>
          items.map((supplier) => ({
            id: supplier.id,
            supplier: supplier.supplier,
          }))
        )
      )
      .subscribe((suppliers) => (this.suppliers = suppliers));
  }
}