import { Component, OnInit, inject } from '@angular/core';
import { ClassificationsService } from './classifications.service';
import {
  Classification,
  ClassificationResponse,
} from './classification.interface';
import { map } from 'rxjs';

@Component({
  selector: 'classifications-read-page',
  template: `
    <crud-header title="Classifications" />
    <crud-table [tableData]="classifications" />
  `,
})
export class ClassificationsReadPageComponent implements OnInit {
  private classificationsService = inject(ClassificationsService);

  public classifications: Classification[] = [];

  ngOnInit(): void {
    this.classificationsService
      .getAll()
      .pipe(
        map(({ items }) =>
          items.map((classification) => ({
            id: classification.id,
            classification: classification.classification,
          }))
        )
      )
      .subscribe((classifications) => {
        this.classifications = classifications;
      });
  }
}
