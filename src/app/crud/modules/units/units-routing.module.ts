import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnitsListPageComponent } from './pages/units-list-page.component';
import { UnitsFormPageComponent } from './pages/units-form-page/units-form-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list',
        component: UnitsListPageComponent,
      },
      {
        path: 'create',
        component: UnitsFormPageComponent,
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
