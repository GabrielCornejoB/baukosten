import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClasificationsRoutingModule } from './clasifications-routing.module';
import { CrudModule } from '../../crud.module';
import { ClasificationsReadPageComponent } from './clasifications-read-page.component';

@NgModule({
  declarations: [
    ClasificationsReadPageComponent
  ],
  imports: [CommonModule, ClasificationsRoutingModule, CrudModule],
})
export class ClasificationsModule {}
