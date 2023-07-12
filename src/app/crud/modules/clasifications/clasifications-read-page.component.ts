import { Component, OnInit, inject } from '@angular/core';
import { ClasificationsService } from './clasifications.service';
import { Clasification } from './clasification.interface';

@Component({
  selector: 'clasifications-read-page',
  template: `
    <crud-read-page
      title="Clasifications"
      [tableData]="clasifications"
      [tableColumns]="keys"
    />
  `,
})
export class ClasificationsReadPageComponent implements OnInit {
  private clasificationsService = inject(ClasificationsService);

  public clasifications: Clasification[] = [];
  public keys: string[] = [];

  ngOnInit(): void {
    this.clasificationsService.getAll().subscribe((clasifications) => {
      this.clasifications = clasifications;
      this.keys = Object.keys(clasifications[0]);
      console.log(clasifications);
    });
  }
}
