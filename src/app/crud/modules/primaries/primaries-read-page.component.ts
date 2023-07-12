import { Component, OnInit, inject } from '@angular/core';
import { PrimariesService } from './primaries.service';
import { Primary } from './primary.interface';

@Component({
  selector: 'primaries-read-page',
  template: `
    <crud-header title="Primaries" />
    <crud-table [tableData]="primaries" />
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
