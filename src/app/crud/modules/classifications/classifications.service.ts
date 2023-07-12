import { Injectable } from '@angular/core';
import { CrudService } from '../../crud.service';
import { Classification } from './classification.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ClassificationsService extends CrudService<Classification> {
  constructor(protected override http: HttpClient) {
    super(http);
  }
  override getResourceEndpoint(): string {
    return 'classifications/';
  }
}
