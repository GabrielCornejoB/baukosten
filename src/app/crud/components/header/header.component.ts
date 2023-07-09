import { Component, Input } from '@angular/core';

@Component({
  selector: 'crud-header',
  templateUrl: './header.component.html',
  styles: [],
})
export class HeaderComponent {
  @Input() public title: string = '';
}
