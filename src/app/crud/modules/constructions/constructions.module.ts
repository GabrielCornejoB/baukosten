import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConstructionsRoutingModule } from './constructions-routing.module';
import { ConstructionsReadPageComponent } from './constructions-read-page.component';


@NgModule({
  declarations: [
    ConstructionsReadPageComponent
  ],
  imports: [
    CommonModule,
    ConstructionsRoutingModule
  ]
})
export class ConstructionsModule { }
