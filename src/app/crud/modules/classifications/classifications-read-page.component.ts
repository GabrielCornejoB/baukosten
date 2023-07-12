import { Component, OnInit, inject } from '@angular/core';
import { ClassificationsService } from './classifications.service';
import { Classification } from './classification.interface';

@Component({
  selector: 'classifications-read-page',
  template: `
    <crud-read-page
      title="Classifications"
      [tableData]="classifications"
      [tableColumns]="keys"
    />
  `,
})
export class ClassificationsReadPageComponent implements OnInit {
  private classificationsService = inject(ClassificationsService);

  public classifications: Classification[] = [];
  public keys: string[] = [];

  ngOnInit(): void {
    this.classificationsService.getAll().subscribe((classifications) => {
      this.classifications = classifications;
      this.keys = Object.keys(classifications[0]);
      console.log(classifications);
    });
  }
}
