import { Injectable } from '@angular/core';
import { CrudService } from '../../crud.service';
import { UnitResponse } from './unit.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UnitsService extends CrudService<UnitResponse> {
  constructor(protected override http: HttpClient) {
    super(http);
  }

  override getResourceEndpoint(): string {
    return 'units/records/';
  }
}
