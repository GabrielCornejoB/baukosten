import { Injectable } from '@angular/core';
import { CrudService } from '../../crud.service';
import { Primary } from './primary.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PrimariesService extends CrudService<Primary> {
  constructor(protected override http: HttpClient) {
    super(http);
  }

  override getResourceEndpoint(): string {
    return 'primaries/';
  }
}
