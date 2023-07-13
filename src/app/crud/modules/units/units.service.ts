import { Injectable } from '@angular/core';
import { CrudService } from '../../crud.service';
import { UnitResponse, Unit } from './unit.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UnitsService extends CrudService<UnitResponse, Unit> {
  constructor(protected override http: HttpClient) {
    super(http);
  }

  override getResource(): string {
    return 'units';
  }

  override getQueryParams(): string {
    return '?fields=id, unit';
  }
}
