import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'agua',
    loadChildren: () => import('./agua/agua.module').then(m => m.AguaModule),
  },
  {
    path: 'riego',
    loadChildren: () => import('./riego/riego.module').then(m => m.RiegoModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'forgotPass',
    loadChildren: () => import('./forgot-pass/forgot-pass.module').then( m => m.ForgotPassPageModule)
  },
  {
    path: '',
    component: AppComponent,
    pathMatch: 'full'
  },
  {
    path: 'ecoinicio',
    loadChildren: () => import('./ecoinicio/ecoinicio.module').then( m => m.EcoinicioPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
