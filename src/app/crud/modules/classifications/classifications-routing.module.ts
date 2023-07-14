import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassificationsListPageComponent } from './pages/classifications-list-page.component';
import { ClassificationsFormPageComponent } from './pages/classifications-form-page/classifications-form-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list',
        component: ClassificationsListPageComponent,
      },
      {
        path: 'create',
        component: ClassificationsFormPageComponent,
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
