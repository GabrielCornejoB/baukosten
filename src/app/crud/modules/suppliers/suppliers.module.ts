import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuppliersRoutingModule } from './suppliers-routing.module';
import { SuppliersListPageComponent } from './suppliers-list-page.component';
import { CrudModule } from '../../crud.module';

@NgModule({
  declarations: [SuppliersListPageComponent],
  imports: [CommonModule, SuppliersRoutingModule, CrudModule],
})
export class SuppliersModule {}
