import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimariesRoutingModule } from './primaries-routing.module';
import { PrimariesListPageComponent } from './primaries-list-page.component';
import { CrudModule } from '../../crud.module';

@NgModule({
  declarations: [PrimariesListPageComponent],
  imports: [CommonModule, PrimariesRoutingModule, CrudModule],
})
export class PrimariesModule {}
