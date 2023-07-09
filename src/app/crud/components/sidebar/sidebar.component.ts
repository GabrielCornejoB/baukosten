import { Component } from '@angular/core';
import { NavItem } from '../../interfaces/nav-item.interface';

@Component({
  selector: 'crud-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [],
})
export class SidebarComponent {
  public navItems: NavItem[] = [
    {
      iconName: 'home',
      name: 'home',
    },
    {
      iconName: 'format_list_bulleted',
      name: 'Primary Supplies',
    },
    {
      iconName: 'blender',
      name: 'Compound Products',
    },
    {
      iconName: 'savings',
      name: 'Budgets',
    },
    {
      iconName: 'construction',
      name: 'Constructions',
    },
    {
      iconName: 'add_business',
      name: 'Suppliers',
    },
    {
      iconName: 'filter_alt',
      name: 'Classifications',
    },
    {
      iconName: 'straighten',
      name: 'Measurement Units',
    },
  ];
}
