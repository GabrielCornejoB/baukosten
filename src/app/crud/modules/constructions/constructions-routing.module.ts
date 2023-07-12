import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConstructionsReadPageComponent } from './constructions-read-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'read',
        component: ConstructionsReadPageComponent,
      },
      {
        path: '**',
        redirectTo: 'read',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConstructionsRoutingModule {}
