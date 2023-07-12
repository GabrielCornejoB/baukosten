import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnitsRoutingModule } from './units-routing.module';
import { UnitsReadPageComponent } from './units-read-page.component';


@NgModule({
  declarations: [
    UnitsReadPageComponent
  ],
  imports: [
    CommonModule,
    UnitsRoutingModule
  ]
})
export class UnitsModule { }
