import { Component, OnInit, inject } from '@angular/core';
import { Unit } from './unit.interface';
import { UnitsService } from './units.service';

@Component({
  selector: 'units-read-page',
  template: `
    <crud-header title="Measurement Units" />
    <!-- <crud-table [tableData]="units" /> -->
  `,
  styles: [],
})
export class UnitsReadPageComponent {
  // private unitsService = inject(UnitsService);
  // public units: Unit[] = [];
  // ngOnInit(): void {
  //   this.unitsService.getAll().subscribe((units) => {
  //     this.units = units;
  //   });
  // }
}
