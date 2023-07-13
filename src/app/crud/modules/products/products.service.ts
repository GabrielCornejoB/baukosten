import { Injectable } from '@angular/core';
import { CrudService } from '../../crud.service';
import { HttpClient } from '@angular/common/http';
import { ProductResponse, ProductResponseItem } from './product.interface';

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
  override getListQueryParams(): string {
    return '?expand=unit&fields=id, product, expand.unit.unit';
  }
  override getViewEndpoint(): string {
    return '';
  }
}
