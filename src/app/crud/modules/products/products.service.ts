import { Injectable } from '@angular/core';
import { CrudService } from '../../crud.service';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService extends CrudService<Product> {
  constructor(protected override http: HttpClient) {
    super(http);
  }

  override getResourceEndpoint(): string {
    return 'products/';
  }
}
