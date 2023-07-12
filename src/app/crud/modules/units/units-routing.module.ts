import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnitsReadPageComponent } from './units-read-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'read',
        component: UnitsReadPageComponent,
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
export class UnitsRoutingModule {}
