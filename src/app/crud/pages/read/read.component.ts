import { Component, Input } from '@angular/core';

@Component({
  selector: 'crud-read-page',
  templateUrl: './read.component.html',
  styles: [],
})
export class ReadComponent {
  @Input() public title: string = '';
  @Input() public tableData: any[] = [];
  @Input() public tableColumns: string[] = [];
}
