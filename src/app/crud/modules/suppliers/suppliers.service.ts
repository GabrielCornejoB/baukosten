import { Injectable } from '@angular/core';
import { CrudService } from '../../crud.service';
import { SupplierResponse } from './supplier.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SuppliersService extends CrudService<SupplierResponse> {
  constructor(protected override http: HttpClient) {
    super(http);
  }

  override getResourceEndpoint(): string {
    return 'suppliers/records/';
  }
}
