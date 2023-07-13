import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimariesReadPageComponent } from './primaries-read-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list',
        component: PrimariesReadPageComponent,
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
