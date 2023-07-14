import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimariesRoutingModule } from './primaries-routing.module';
import { PrimariesListPageComponent } from './pages/primaries-list-page.component';
import { CrudModule } from '../../crud.module';
import { PrimariesDetailPageComponent } from './pages/primaries-detail-page.component';
import { PrimariesFormPageComponent } from './pages/primaries-form-page/primaries-form-page.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PrimariesListPageComponent,
    PrimariesDetailPageComponent,
    PrimariesFormPageComponent,
  ],
  imports: [
    CommonModule,
    PrimariesRoutingModule,
    CrudModule,
    ReactiveFormsModule,
  ],
})
export class PrimariesModule {}
