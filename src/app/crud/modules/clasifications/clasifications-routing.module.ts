import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClasificationsReadPageComponent } from './clasifications-read-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'read',
        component: ClasificationsReadPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClasificationsRoutingModule {}
