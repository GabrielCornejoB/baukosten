import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'crud-table',
  templateUrl: './table.component.html',
  styles: [],
})
export class TableComponent<TData extends { id: string }> implements OnChanges {
  @Input() public tableData: TData[] = [];
  @Input() public hasDetailView: boolean = false;
  @Input() public detailViewText: string = '';

  @Output() idToDelete: EventEmitter<string> = new EventEmitter();

  public keys?: Array<keyof TData>;

  public selectedId: string | undefined;

  ngOnChanges(changes: SimpleChanges): void {
    if (this.tableData.length > 0 && this.keys === undefined) {
      this.keys = Object.keys(this.tableData[0]) as Array<keyof TData>;
    }
  }

  public delete() {
    if (this.selectedId) this.idToDelete.emit(this.selectedId);
  }

  public openModal(id: string) {
    const table_modal = document.getElementById('table_modal');
    if (table_modal) {
      (table_modal as HTMLDialogElement).showModal();
      this.selectedId = id;
    }
  }
}
