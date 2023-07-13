import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimariesListPageComponent } from './pages/primaries-list-page.component';
import { PrimariesDetailPageComponent } from './pages/primaries-detail-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list',
        component: PrimariesListPageComponent,
      },
      {
        path: 'details/:id',
        component: PrimariesDetailPageComponent,
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
