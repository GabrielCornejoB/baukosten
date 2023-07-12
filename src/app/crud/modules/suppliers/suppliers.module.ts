import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuppliersRoutingModule } from './suppliers-routing.module';
import { SuppliersReadPageComponent } from './suppliers-read-page.component';


@NgModule({
  declarations: [
    SuppliersReadPageComponent
  ],
  imports: [
    CommonModule,
    SuppliersRoutingModule
  ]
})
export class SuppliersModule { }
