import { Component } from '@angular/core';
import { NavItem } from '../../interfaces/nav-item.interface';

@Component({
  selector: 'crud-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [],
})
export class SidebarComponent {
  private baseURL: string = '/crud/';
  public navItems: NavItem[] = [
    {
      iconName: 'format_list_bulleted',
      name: 'Primary Supplies',
      link: `${this.baseURL}primaries`,
    },
    {
      iconName: 'blender',
      name: 'Compound Products',
      link: `${this.baseURL}products`,
    },
    {
      iconName: 'add_business',
      name: 'Suppliers',
      link: `${this.baseURL}suppliers`,
    },
    {
      iconName: 'filter_alt',
      name: 'Classifications',
      link: `${this.baseURL}classifications`,
    },
    {
      iconName: 'straighten',
      name: 'Measurement Units',
      link: `${this.baseURL}units`,
    },
  ];
}
