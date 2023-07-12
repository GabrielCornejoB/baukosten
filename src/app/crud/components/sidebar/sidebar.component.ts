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
    // {
    //   iconName: 'home',
    //   name: 'home',
    //   link: `${this.baseURL}`,
    // },
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
      iconName: 'savings',
      name: 'Budgets',
      link: `${this.baseURL}budgets`,
    },
    {
      iconName: 'construction',
      name: 'Constructions',
      link: `${this.baseURL}constructions`,
    },
    {
      iconName: 'add_business',
      name: 'Suppliers',
      link: `${this.baseURL}suppliers`,
    },
    {
      iconName: 'filter_alt',
      name: 'Classifications',
      link: `${this.baseURL}clasifications`,
    },
    {
      iconName: 'straighten',
      name: 'Measurement Units',
      link: `${this.baseURL}units`,
    },
  ];
}
