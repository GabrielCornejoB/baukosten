import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimariesListPageComponent } from './primaries-list-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list',
        component: PrimariesListPageComponent,
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
export class PrimariesRoutingModule {}
