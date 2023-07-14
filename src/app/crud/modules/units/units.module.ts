import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnitsRoutingModule } from './units-routing.module';
import { UnitsListPageComponent } from './pages/units-list-page.component';
import { CrudModule } from '../../crud.module';
import { UnitsFormPageComponent } from './pages/units-form-page/units-form-page.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UnitsListPageComponent, UnitsFormPageComponent],
  imports: [CommonModule, UnitsRoutingModule, CrudModule, ReactiveFormsModule],
})
export class UnitsModule {}
