import { Injectable } from '@angular/core';
import { CrudService } from '../../crud.service';
import {
  SupplierResponse,
  Supplier,
  SupplierReqBody,
} from './supplier.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SuppliersService extends CrudService<
  SupplierResponse,
  Supplier,
  SupplierReqBody
> {
  constructor(protected override http: HttpClient) {
    super(http);
  }

  override getResource(): string {
    return 'suppliers';
  }
  override getQueryParams(): string {
    return '?fields=id, supplier';
  }
}
