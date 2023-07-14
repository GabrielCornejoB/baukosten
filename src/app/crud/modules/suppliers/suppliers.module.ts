import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuppliersRoutingModule } from './suppliers-routing.module';
import { SuppliersListPageComponent } from './pages/suppliers-list-page.component';
import { CrudModule } from '../../crud.module';
import { SuppliersFormPageComponent } from './pages/suppliers-form-page/suppliers-form-page.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SuppliersListPageComponent, SuppliersFormPageComponent],
  imports: [
    CommonModule,
    SuppliersRoutingModule,
    CrudModule,
    ReactiveFormsModule,
  ],
})
export class SuppliersModule {}
