import { Injectable } from '@angular/core';
import { CrudService } from '../../crud.service';
import { HttpClient } from '@angular/common/http';
import { ProductResponse } from './product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService extends CrudService<ProductResponse> {
  constructor(protected override http: HttpClient) {
    super(http);
  }

  override getResourceEndpoint(): string {
    return 'products/records?expand=unit';
  }
}
