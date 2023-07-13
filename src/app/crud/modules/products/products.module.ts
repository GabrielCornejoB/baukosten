import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsListPageComponent } from './pages/products-list-page.component';
import { CrudModule } from '../../crud.module';
import { ProductsDetailPageComponent } from './pages/products-detail-page.component';

@NgModule({
  declarations: [ProductsListPageComponent, ProductsDetailPageComponent],
  imports: [CommonModule, ProductsRoutingModule, CrudModule],
})
export class ProductsModule {}
