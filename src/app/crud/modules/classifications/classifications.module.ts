import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassificationsRoutingModule } from './classifications-routing.module';
import { CrudModule } from '../../crud.module';
import { ClassificationsListPageComponent } from './classifications-list-page.component';

@NgModule({
  declarations: [ClassificationsListPageComponent],
  imports: [CommonModule, ClassificationsRoutingModule, CrudModule],
})
export class ClassificationsModule {}
