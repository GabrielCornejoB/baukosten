import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { CrudRoutingModule } from './crud-routing.module';
import { TableComponent } from './components/table/table.component';
import { TitleTransformPipe } from './pipes/title-transform.pipe';
import { DetailInfoComponent } from './components/detail-info/detail-info.component';

@NgModule({
  declarations: [
    LayoutComponent,
    SidebarComponent,
    HeaderComponent,
    TableComponent,
    TitleTransformPipe,
    DetailInfoComponent,
  ],
  imports: [CommonModule, CrudRoutingModule, RouterModule],
  exports: [HeaderComponent, TableComponent, DetailInfoComponent],
})
export class CrudModule {}
