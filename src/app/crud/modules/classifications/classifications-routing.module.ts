import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassificationsListPageComponent } from './classifications-list-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list',
        component: ClassificationsListPageComponent,
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
export class ClassificationsRoutingModule {}
