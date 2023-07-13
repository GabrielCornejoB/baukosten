import { Injectable } from '@angular/core';
import { CrudService } from '../../crud.service';
import { PrimaryResponse, Item as PrimaryItem } from './primary.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PrimariesService extends CrudService<
  PrimaryResponse,
  PrimaryItem
> {
  constructor(protected override http: HttpClient) {
    super(http);
  }

  override getResource(): string {
    return 'primaries';
  }

  override getListEndpoint(): string {
    return '?expand=unit, classification, default_primary_supplier.supplier';
  }

  override getViewEndpoint(): string {
    return '?expand=unit';
  }
}
