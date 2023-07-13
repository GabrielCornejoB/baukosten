import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListPageComponent } from './pages/products-list-page.component';
import { ProductsDetailPageComponent } from './pages/products-detail-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list',
        component: ProductsListPageComponent,
      },
      {
        path: 'details/:id',
        component: ProductsDetailPageComponent,
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
export class ProductsRoutingModule {}
