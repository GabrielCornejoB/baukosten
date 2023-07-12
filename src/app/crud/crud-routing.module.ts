import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'tests',
        loadChildren: () =>
          import('./modules/tests/tests.module').then((m) => m.TestsModule),
      },
      {
        path: 'clasifications',
        loadChildren: () =>
          import('./modules/clasifications/clasifications.module').then(
            (m) => m.ClasificationsModule
          ),
      },
      {
        path: '**',
        redirectTo: 'tests',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudRoutingModule {}
