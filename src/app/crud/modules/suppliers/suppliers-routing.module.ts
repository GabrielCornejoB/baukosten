import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuppliersListPageComponent } from './pages/suppliers-list-page.component';
import { SuppliersFormPageComponent } from './pages/suppliers-form-page/suppliers-form-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list',
        component: SuppliersListPageComponent,
      },
      {
        path: 'create',
        component: SuppliersFormPageComponent,
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
export class SuppliersRoutingModule {}
