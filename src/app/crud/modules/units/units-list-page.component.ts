import { Component, OnInit, inject } from '@angular/core';
import { Unit } from './unit.interface';
import { UnitsService } from './units.service';
import { map } from 'rxjs';

@Component({
  selector: 'units-list-page',
  template: `
    <crud-header title="Measurement Units" />
    <crud-table [tableData]="units" />
  `,
  styles: [],
})
export class UnitsListPageComponent implements OnInit {
  private unitsService = inject(UnitsService);

  public units: Unit[] = [];

  ngOnInit(): void {
    this.unitsService
      .getAll()
      .pipe(
        map(({ items }) =>
          items.map((unit) => ({
            id: unit.id,
            unit: unit.unit,
          }))
        )
      )
      .subscribe((units) => {
        this.units = units;
      });
  }
}
