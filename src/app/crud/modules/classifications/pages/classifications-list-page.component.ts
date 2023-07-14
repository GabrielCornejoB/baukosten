import { Component, OnInit, inject } from '@angular/core';
import { ClassificationsService } from '../classifications.service';
import { Classification } from '../classification.interface';
import { map } from 'rxjs';

@Component({
  selector: 'classifications-list-page',
  template: `
    <crud-header title="Classifications" />
    <crud-table
      [tableData]="classifications"
      (onDelete)="deleteClassification($event)"
    />
  `,
})
export class ClassificationsListPageComponent implements OnInit {
  private classificationsService = inject(ClassificationsService);

  public classifications: Classification[] = [];

  ngOnInit(): void {
    this.getClassifications();
  }

  private getClassifications(): void {
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
      .subscribe((classifications) => (this.classifications = classifications));
  }

  public deleteClassification(id: string) {
    this.classificationsService.delete(id).subscribe((deletedSuccesfully) => {
      return deletedSuccesfully
        ? (this.classifications = this.classifications.filter(
            (c) => id !== c.id
          ))
        : console.log('error');
    });
  }
}
