import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnitsRoutingModule } from './units-routing.module';
import { UnitsListPageComponent } from './units-list-page.component';
import { CrudModule } from '../../crud.module';

@NgModule({
  declarations: [UnitsListPageComponent],
  imports: [CommonModule, UnitsRoutingModule, CrudModule],
})
export class UnitsModule {}
