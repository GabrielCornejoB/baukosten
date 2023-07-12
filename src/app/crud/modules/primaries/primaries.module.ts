import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimariesRoutingModule } from './primaries-routing.module';
import { PrimariesReadPageComponent } from './primaries-read-page.component';
import { CrudModule } from '../../crud.module';

@NgModule({
  declarations: [PrimariesReadPageComponent],
  imports: [CommonModule, PrimariesRoutingModule, CrudModule],
})
export class PrimariesModule {}
