import { Injectable } from '@angular/core';
import { CrudService } from '../../crud.service';
import {
  PrimaryResponse,
  PrimaryResponseItem,
} from './interfaces/primary.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PrimarySupplierResponse } from './interfaces/primary-supplier.interface';

@Injectable({
  providedIn: 'root',
})
export class PrimariesService extends CrudService<
  PrimaryResponse,
  PrimaryResponseItem
> {
  constructor(protected override http: HttpClient) {
    super(http);
  }

  override getResource(): string {
    return 'primaries';
  }

  override getListQueryParams(): string {
    const expandedFields: string =
      '?expand=unit, classification, default_primary_supplier.supplier';
    const selectedFields: string =
      'fields=id, primary, expand.unit.unit, expand.classification.classification, expand.default_primary_supplier.unit_price, expand.default_primary_supplier.expand.supplier.supplier';

    return `${expandedFields}&${selectedFields}`;
  }

  override getViewEndpoint(): string {
    return '?expand=unit';
  }

  getSuppliers(primaryId: string): Observable<PrimarySupplierResponse> {
    const initialURL: string =
      'http://localhost:8090/api/collections/primary_suppliers/records';
    const expandedFields: string = 'expand=supplier, primary';
    const selectedFields: string =
      'fields=id, expand.supplier.supplier, unit_price, updated';

    const url: string = `${initialURL}?${expandedFields}&${selectedFields}&filter=(primary = '${primaryId}')`;

    // TODO: map() to return a smaller representation
    return this.http.get<PrimarySupplierResponse>(url);
  }
}
