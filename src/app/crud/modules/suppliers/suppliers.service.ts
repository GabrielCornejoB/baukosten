import { Injectable } from '@angular/core';
import { CrudService } from '../../crud.service';
import { SupplierResponse, Supplier } from './supplier.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SuppliersService extends CrudService<SupplierResponse, Supplier> {
  constructor(protected override http: HttpClient) {
    super(http);
  }

  override getResource(): string {
    return 'suppliers';
  }
  override getListQueryParams(): string {
    return '?fields=id, supplier';
  }
  override getViewEndpoint(): string {
    return '';
  }
}
