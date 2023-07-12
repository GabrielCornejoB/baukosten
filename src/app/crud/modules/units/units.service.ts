import { Injectable } from '@angular/core';
import { CrudService } from '../../crud.service';
import { Unit } from './unit.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UnitsService extends CrudService<Unit> {
  constructor(protected override http: HttpClient) {
    super(http);
  }

  override getResourceEndpoint(): string {
    return 'measurement_units/';
  }
}
