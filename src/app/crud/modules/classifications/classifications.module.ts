import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassificationsRoutingModule } from './classifications-routing.module';
import { CrudModule } from '../../crud.module';
import { ClassificationsReadPageComponent } from './classifications-read-page.component';

@NgModule({
  declarations: [ClassificationsReadPageComponent],
  imports: [CommonModule, ClassificationsRoutingModule, CrudModule],
})
export class ClassificationsModule {}
