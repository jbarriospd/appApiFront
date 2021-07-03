import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'principal',
    loadChildren: () => import('./pages/principal/principal.module').then( m => m.PrincipalPageModule)
  },
  {
    path: 'calculadora-gastos',
    loadChildren: () => import('./pages/calculadora-gastos/calculadora-gastos.module').then( m => m.CalculadoraGastosPageModule)
  },
  {
    path: 'mi-ahorro',
    loadChildren: () => import('./pages/mi-ahorro/mi-ahorro.module').then( m => m.MiAhorroPageModule)
  },
  {
    path: 'retirar',
    loadChildren: () => import('./pages/retirar/retirar.module').then( m => m.RetirarPageModule)
  },
  {
    path: 'resumen',
    loadChildren: () => import('./pages/resumen/resumen.module').then( m => m.ResumenPageModule)
  },
  {
    path: 'mis-deudas',
    loadChildren: () => import('./pages/mis-deudas/mis-deudas.module').then( m => m.MisDeudasPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
