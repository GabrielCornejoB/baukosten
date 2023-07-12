import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuppliersReadPageComponent } from './suppliers-read-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'read',
        component: SuppliersReadPageComponent,
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
export class SuppliersRoutingModule {}
