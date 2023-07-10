import { Component, Input } from '@angular/core';

@Component({
  selector: 'crud-table',
  templateUrl: './table.component.html',
  styles: [],
})
export class TableComponent {
  @Input() public tableData: any[] = [];
  @Input() public tableColumns: string[] = [];

  public readonly objectKeys = Object.keys;
}
