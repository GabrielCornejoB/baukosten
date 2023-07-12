import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetsReadPageComponent } from './budgets-read-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'read',
        component: BudgetsReadPageComponent,
      },
      {
        path: '**',
        redirectTo: 'read',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BudgetsRoutingModule {}
