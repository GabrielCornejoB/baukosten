import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestsRoutingModule } from './tests-routing.module';
import { ReadPageComponent } from './read-page.component';
import { CrudModule } from '../../crud.module';

@NgModule({
  declarations: [ReadPageComponent],
  imports: [CommonModule, TestsRoutingModule, CrudModule],
})
export class TestsModule {}
