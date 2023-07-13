import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'crud-detail-info',
  templateUrl: './detail-info.component.html',
  styles: [],
})
export class DetailInfoComponent<TData extends {}> implements OnChanges {
  @Input() public detailData?: TData;

  public keys?: Array<keyof TData>;

  ngOnChanges(changes: SimpleChanges): void {
    if (this.detailData && this.keys === undefined) {
      this.keys = Object.keys(this.detailData) as Array<keyof TData>;
    }
  }
}
