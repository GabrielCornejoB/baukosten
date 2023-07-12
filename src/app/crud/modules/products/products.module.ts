import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsReadPageComponent } from './products-read-page.component';
import { CrudModule } from '../../crud.module';

@NgModule({
  declarations: [ProductsReadPageComponent],
  imports: [CommonModule, ProductsRoutingModule, CrudModule],
})
export class ProductsModule {}
