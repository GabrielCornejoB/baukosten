import { Component, OnInit, inject } from '@angular/core';
import { SuppliersService } from '../suppliers.service';
import { Supplier } from '../supplier.interface';
import { map } from 'rxjs';

@Component({
  selector: 'suppliers-list-page',
  template: `
    <crud-header title="Suppliers" />
    <crud-table [tableData]="suppliers" (onDelete)="deleteSupplier($event)" />
  `,
})
export class SuppliersListPageComponent implements OnInit {
  private suppliersService = inject(SuppliersService);

  public suppliers: Supplier[] = [];

  ngOnInit(): void {
    this.getSuppliers();
  }

  private getSuppliers(): void {
    this.suppliersService
      .getAll()
      .pipe(map(({ items }) => items))
      .subscribe((suppliers) => (this.suppliers = suppliers));
  }

  public deleteSupplier(id: string): void {
    this.suppliersService.delete(id).subscribe((deletedSuccessfully) => {
      return deletedSuccessfully
        ? (this.suppliers = this.suppliers.filter((s) => id !== s.id))
        : console.log('error');
    });
  }
}
