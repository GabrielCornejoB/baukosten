import { Injectable } from '@angular/core';
import { CrudService } from '../../crud.service';
import { SupplierResponse, Item as SupplierItem } from './supplier.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SuppliersService extends CrudService<
  SupplierResponse,
  SupplierItem
> {
  constructor(protected override http: HttpClient) {
    super(http);
  }

  override getResource(): string {
    return 'suppliers/records/';
  }
  override getListEndpoint(): string {
    return '';
  }
  override getViewEndpoint(): string {
    return '';
  }
}
