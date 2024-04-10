import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/dashboard-view/dashboard-view.module').then((m) => m.DashboardViewModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./modules/products-view/products-view.module').then((m) => m.ProductsViewModule)
  },
  {
    path: '**', redirectTo: 'dashboard'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
