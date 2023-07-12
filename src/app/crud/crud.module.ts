import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { CrudRoutingModule } from './crud-routing.module';
import { TableComponent } from './components/table/table.component';
import { ColumnTitleTransformPipe } from './pipes/column-title-transform.pipe';

@NgModule({
  declarations: [
    LayoutComponent,
    SidebarComponent,
    HeaderComponent,
    TableComponent,
    ColumnTitleTransformPipe,
  ],
  imports: [CommonModule, CrudRoutingModule, RouterModule],
  exports: [HeaderComponent, TableComponent],
})
export class CrudModule {}
