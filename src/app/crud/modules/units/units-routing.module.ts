import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnitsListPageComponent } from './units-list-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list',
        component: UnitsListPageComponent,
      },
      {
        path: '**',
        redirectTo: 'list',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnitsRoutingModule {}
