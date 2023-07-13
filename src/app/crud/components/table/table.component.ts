import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'crud-table',
  templateUrl: './table.component.html',
  styles: [],
})
export class TableComponent<TData extends { id: string }> implements OnChanges {
  @Input() public tableData: TData[] = [];
  @Input() public hasDetailView: boolean = false;
  @Input() public detailViewText: string = '';

  public keys?: Array<keyof TData>;

  ngOnChanges(changes: SimpleChanges): void {
    if (this.tableData.length > 0 && this.keys === undefined) {
      this.keys = Object.keys(this.tableData[0]) as Array<keyof TData>;
    }
  }
}
