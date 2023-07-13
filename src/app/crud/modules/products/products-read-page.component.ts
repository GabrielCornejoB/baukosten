import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { DisplayProduct } from './product.interface';
import { map } from 'rxjs';

@Component({
  selector: 'products-read-page',
  template: `
    <crud-header title="Compound Products" />
    <!-- <crud-table
      [tableData]="products"
      [hasDetailView]="true"
      detailViewText="Materials"
    /> -->
  `,
  styles: [],
})
export class ProductsReadPageComponent {
  // private productsService = inject(ProductsService);
  // public products: DisplayProduct[] = [];
  // ngOnInit(): void {
  //   this.productsService
  //     .getAll()
  //     .pipe(
  //       map((products) =>
  //         products.map((product) => ({
  //           id: product.id,
  //           product: product.product,
  //           measurement_unit: product.measurement_unit,
  //         }))
  //       )
  //     )
  //     .subscribe((products) => {
  //       this.products = products;
  //     });
  // }
}
