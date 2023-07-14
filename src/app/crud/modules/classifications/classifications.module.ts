import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassificationsRoutingModule } from './classifications-routing.module';
import { CrudModule } from '../../crud.module';
import { ClassificationsListPageComponent } from './pages/classifications-list-page.component';
import { ClassificationsFormPageComponent } from './pages/classifications-form-page/classifications-form-page.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ClassificationsListPageComponent,
    ClassificationsFormPageComponent,
  ],
  imports: [
    CommonModule,
    ClassificationsRoutingModule,
    CrudModule,
    ReactiveFormsModule,
  ],
})
export class ClassificationsModule {}
