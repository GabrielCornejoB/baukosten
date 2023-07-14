import { Component, OnInit, inject } from '@angular/core';
import { Unit } from '../unit.interface';
import { UnitsService } from '../units.service';
import { map } from 'rxjs';

@Component({
  selector: 'units-list-page',
  template: `
    <crud-header title="Measurement Units" />
    <crud-table [tableData]="units" (onDelete)="deleteUnit($event)" />
  `,
  styles: [],
})
export class UnitsListPageComponent implements OnInit {
  private unitsService = inject(UnitsService);

  public units: Unit[] = [];

  ngOnInit(): void {
    this.getUnits();
  }

  private getUnits(): void {
    this.unitsService
      .getAll()
      .pipe(map(({ items }) => items))
      .subscribe((units) => (this.units = units));
  }

  public deleteUnit(id: string): void {
    this.unitsService.delete(id).subscribe((deletedSuccessfully) => {
      return deletedSuccessfully
        ? (this.units = this.units.filter((u) => id !== u.id))
        : console.log('Error');
    });
  }
}
