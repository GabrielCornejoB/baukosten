import { Component, OnInit, inject } from '@angular/core';
import { ClassificationsService } from './classifications.service';
import { Classification } from './classification.interface';

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
    this.classificationsService.getAll().subscribe((classifications) => {
      this.classifications = classifications;
    });
  }
}
