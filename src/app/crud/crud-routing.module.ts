import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'primaries',
        loadChildren: () =>
          import('./modules/primaries/primaries.module').then(
            (m) => m.PrimariesModule
          ),
      },
      {
        path: 'products',
        loadChildren: () =>
          import('./modules/products/products.module').then(
            (m) => m.ProductsModule
          ),
      },
      {
        path: 'budgets',
        loadChildren: () =>
          import('./modules/budgets/budgets.module').then(
            (m) => m.BudgetsModule
          ),
      },
      {
        path: 'constructions',
        loadChildren: () =>
          import('./modules/constructions/constructions.module').then(
            (m) => m.ConstructionsModule
          ),
      },
      {
        path: 'suppliers',
        loadChildren: () =>
          import('./modules/suppliers/suppliers.module').then(
            (m) => m.SuppliersModule
          ),
      },

      {
        path: 'classifications',
        loadChildren: () =>
          import('./modules/classifications/classifications.module').then(
            (m) => m.ClassificationsModule
          ),
      },
      {
        path: 'units',
        loadChildren: () =>
          import('./modules/units/units.module').then((m) => m.UnitsModule),
      },
      {
        path: '**',
        redirectTo: 'primaries',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudRoutingModule {}
