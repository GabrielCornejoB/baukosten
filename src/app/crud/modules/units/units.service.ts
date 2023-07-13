import { Injectable } from '@angular/core';
import { CrudService } from '../../crud.service';
import { UnitResponse, Item as UnitItem } from './unit.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UnitsService extends CrudService<UnitResponse, UnitItem> {
  constructor(protected override http: HttpClient) {
    super(http);
  }

  override getResource(): string {
    return 'units/records/';
  }

  override getListEndpoint(): string {
    return '';
  }
  override getViewEndpoint(): string {
    return '';
  }
}
