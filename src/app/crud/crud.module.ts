import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { ReadComponent } from './pages/read/read.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { CrudRoutingModule } from './crud-routing.module';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [
    LayoutComponent,
    ReadComponent,
    SidebarComponent,
    HeaderComponent,
    TableComponent,
  ],
  imports: [CommonModule, CrudRoutingModule, RouterModule],
  exports: [ReadComponent],
})
export class CrudModule {}
