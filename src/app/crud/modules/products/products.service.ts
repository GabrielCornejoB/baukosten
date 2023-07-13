import { Injectable } from '@angular/core';
import { CrudService } from '../../crud.service';
import { HttpClient } from '@angular/common/http';
import { ProductResponse, Item as ProductItem } from './product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService extends CrudService<ProductResponse, ProductItem> {
  constructor(protected override http: HttpClient) {
    super(http);
  }

  override getResource(): string {
    return 'products/records?expand=unit';
  }
  override getListEndpoint(): string {
    return '';
  }
  override getViewEndpoint(): string {
    return '';
  }
}
