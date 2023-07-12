import { Injectable } from '@angular/core';
import { CrudService } from '../../crud.service';
import { Clasification } from './clasification.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ClasificationsService extends CrudService<Clasification> {
  constructor(protected override http: HttpClient) {
    super(http);
  }
  override getResourceEndpoint(): string {
    return 'clasifications/';
  }
}
