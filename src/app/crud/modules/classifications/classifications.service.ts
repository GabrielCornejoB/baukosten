import { Injectable } from '@angular/core';
import { CrudService } from '../../crud.service';
import {
  ClassificationResponse,
  Item as ClassificationItem,
} from './classification.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ClassificationsService extends CrudService<
  ClassificationResponse,
  ClassificationItem
> {
  constructor(protected override http: HttpClient) {
    super(http);
  }
  override getResource(): string {
    return 'classifications/';
  }
  override getListEndpoint(): string {
    return '';
  }
  override getViewEndpoint(): string {
    return '';
  }
}
