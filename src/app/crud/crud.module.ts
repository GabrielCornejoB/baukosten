import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudRoutingModule } from './crud-routing.module';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { ReadComponent } from './pages/read/read.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [LayoutComponent, ReadComponent, SidebarComponent],
  imports: [CommonModule, CrudRoutingModule, RouterModule],
})
export class CrudModule {}
