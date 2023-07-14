import { Injectable } from '@angular/core';
import { CrudService } from '../../crud.service';
import { HttpClient } from '@angular/common/http';
import {
  ProductResponse,
  ProductResponseItem,
} from './interfaces/product.interface';
import { ProductPrimaryResponse } from './interfaces/product-material.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService extends CrudService<
  ProductResponse,
  ProductResponseItem
> {
  constructor(protected override http: HttpClient) {
    super(http);
  }

  override getResource(): string {
    return 'products';
  }
  override getQueryParams(): string {
    return '?expand=unit&fields=id, product, expand.unit.unit';
  }

  getPrimaries(productId: string) {
    const initialURL: string =
      'http://localhost:8090/api/collections/product_primaries/records';
    const expandedFields: string =
      'expand=primary, primary.default_primary_supplier';
    const selectedFields: string =
      'fields=id, expand.primary.primary, usage, waste, expand.primary.expand.default_primary_supplier.unit_price';

    const url: string = `${initialURL}?${expandedFields}&${selectedFields}&filter=(product = '${productId}')`;

    return this.http.get<ProductPrimaryResponse>(url);
  }
}
