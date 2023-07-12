import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnitsRoutingModule } from './units-routing.module';
import { UnitsReadPageComponent } from './units-read-page.component';
import { CrudModule } from '../../crud.module';

@NgModule({
  declarations: [UnitsReadPageComponent],
  imports: [CommonModule, UnitsRoutingModule, CrudModule],
})
export class UnitsModule {}
