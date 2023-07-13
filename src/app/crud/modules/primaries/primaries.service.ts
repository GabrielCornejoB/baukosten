import { Injectable } from '@angular/core';
import { CrudService } from '../../crud.service';
import { PrimaryResponse } from './primary.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PrimariesService extends CrudService<PrimaryResponse> {
  constructor(protected override http: HttpClient) {
    super(http);
  }

  override getResourceEndpoint(): string {
    return 'primaries/records?expand=unit, classification, default_primary_supplier.supplier';
  }
}
