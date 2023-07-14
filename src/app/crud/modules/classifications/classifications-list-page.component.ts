import { Component, OnInit, inject } from '@angular/core';
import { ClassificationsService } from './classifications.service';
import { Classification } from './classification.interface';
import { map } from 'rxjs';

@Component({
  selector: 'classifications-list-page',
  template: `
    <crud-header title="Classifications" />
    <crud-table
      [tableData]="classifications"
      (idToDelete)="doSomething($event)"
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

  public doSomething(id: string) {
    this.classificationsService.delete(id).subscribe(() => {
      console.log('deleted');
      this.classifications = this.classifications.filter((c) => id !== c.id);
    });
  }
}
