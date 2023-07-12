import { Component, OnInit, inject } from '@angular/core';
import { PrimariesService } from './primaries.service';
import { Primary } from './primary.interface';

@Component({
  selector: 'primaries-read-page',
  template: `
    <crud-header title="Primary Supplies" />
    <crud-table
      [tableData]="primaries"
      [hasDetailView]="true"
      detailViewText="Suppliers"
    />
  `,
  styles: [],
})
export class PrimariesReadPageComponent implements OnInit {
  private primariesService = inject(PrimariesService);

  public primaries: Primary[] = [];

  ngOnInit(): void {
    this.primariesService.getAll().subscribe((primaries) => {
      this.primaries = primaries;
    });
  }
}
