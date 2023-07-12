import { Component, OnInit, inject } from '@angular/core';
import { Unit } from './unit.interface';
import { UnitsService } from './units.service';

@Component({
  selector: 'units-read-page',
  template: `
    <crud-header title="Measurement Units" />
    <crud-table [tableData]="units" [tableColumns]="keys" />
  `,
  styles: [],
})
export class UnitsReadPageComponent implements OnInit {
  private unitsService = inject(UnitsService);

  public units: Unit[] = [];
  public keys: string[] = [];

  ngOnInit(): void {
    this.unitsService.getAll().subscribe((units) => {
      this.units = units;
      this.keys = Object.keys(units[0]);
    });
  }
}
