import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimariesRoutingModule } from './primaries-routing.module';
import { PrimariesListPageComponent } from './pages/primaries-list-page.component';
import { CrudModule } from '../../crud.module';
import { PrimariesDetailPageComponent } from './pages/primaries-detail-page.component';

@NgModule({
  declarations: [PrimariesListPageComponent, PrimariesDetailPageComponent],
  imports: [CommonModule, PrimariesRoutingModule, CrudModule],
})
export class PrimariesModule {}
