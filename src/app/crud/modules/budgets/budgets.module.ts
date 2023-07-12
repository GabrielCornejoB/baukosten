import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BudgetsRoutingModule } from './budgets-routing.module';
import { BudgetsReadPageComponent } from './budgets-read-page.component';


@NgModule({
  declarations: [
    BudgetsReadPageComponent
  ],
  imports: [
    CommonModule,
    BudgetsRoutingModule
  ]
})
export class BudgetsModule { }
