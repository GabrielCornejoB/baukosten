import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsListPageComponent } from './products-list-page.component';
import { CrudModule } from '../../crud.module';

@NgModule({
  declarations: [ProductsListPageComponent],
  imports: [CommonModule, ProductsRoutingModule, CrudModule],
})
export class ProductsModule {}
