import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';
import { Product } from '../interfaces/product.interface';
import { map, switchMap } from 'rxjs';
import { ProductPrimary } from '../interfaces/product-material.interface';

@Component({
  selector: 'products-detail-page',
  template: `
    <crud-header [title]="'Materials of: ' + product?.product" />
    <crud-detail-info [detailData]="product" />
    <div class="divider"></div>
    <crud-table [tableData]="productPrimaries" />
  `,
})
export class ProductsDetailPageComponent implements OnInit {
  private aRoute = inject(ActivatedRoute);
  private router = inject(Router);
  private productsService = inject(ProductsService);

  public product?: Product;
  public productPrimaries: ProductPrimary[] = [];

  ngOnInit(): void {
    this.getPrimary();
  }

  private getPrimary(): void {
    this.aRoute.params
      .pipe(switchMap(({ id }) => this.productsService.getOne(id)))
      .subscribe((item) => {
        if (!item) return this.router.navigateByUrl('/crud/products/list');

        this.product = {
          id: item.id,
          product: item.product,
          unit: item.expand.unit.unit,
        };
        this.getPrimaries(item.id);
        return;
      });
  }

  private getPrimaries(productId: string): void {
    if (this.product)
      this.productsService
        .getPrimaries(productId)
        .pipe(
          map(({ items }) =>
            items.map((pp) => ({
              id: pp.id,
              primary: pp.expand.primary.primary,
              unit_price:
                pp.expand.primary.expand?.default_primary_supplier.unit_price,
              usage: pp.usage,
              waste: pp.waste,
            }))
          )
        )
        .subscribe(
          (productPrimaries) => (this.productPrimaries = productPrimaries)
        );
  }
}
