import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsReadPageComponent } from './products-read-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'read',
        component: ProductsReadPageComponent,
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
export class ProductsRoutingModule {}
