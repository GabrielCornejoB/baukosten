import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'crud',
    loadChildren: () => import('./crud/crud.module').then((m) => m.CrudModule),
  },
  {
    path: '**',
    redirectTo: 'crud',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
