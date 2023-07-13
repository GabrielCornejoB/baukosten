import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { map } from 'rxjs';
import { Product } from '../product.interface';

@Component({
  selector: 'products-list-page',
  template: `
    <crud-header title="Compound Products" />
    <crud-table
      [tableData]="products"
      [hasDetailView]="true"
      detailViewText="Materials"
    />
  `,
  styles: [],
})
export class ProductsListPageComponent implements OnInit {
  private productsService = inject(ProductsService);

  public products: Product[] = [];

  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts(): void {
    this.productsService
      .getAll()
      .pipe(
        map(({ items }) =>
          items.map((product) => ({
            id: product.id,
            product: product.product,
            unit: product.expand.unit.unit,
          }))
        )
      )
      .subscribe((products) => (this.products = products));
  }
}
