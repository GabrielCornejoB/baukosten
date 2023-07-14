import { Injectable } from '@angular/core';
import { CrudService } from '../../crud.service';
import {
  ClassificationResponse,
  Classification,
  ClassificationReqBody,
} from './classification.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ClassificationsService extends CrudService<
  ClassificationResponse,
  Classification,
  ClassificationReqBody
> {
  constructor(protected override http: HttpClient) {
    super(http);
  }
  override getResource(): string {
    return 'classifications';
  }
  override getQueryParams(): string {
    return '?fields=id, classification';
  }
}
