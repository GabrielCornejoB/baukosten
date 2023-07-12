import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimariesRoutingModule } from './primaries-routing.module';
import { PrimariesReadPageComponent } from './primaries-read-page.component';


@NgModule({
  declarations: [
    PrimariesReadPageComponent
  ],
  imports: [
    CommonModule,
    PrimariesRoutingModule
  ]
})
export class PrimariesModule { }
