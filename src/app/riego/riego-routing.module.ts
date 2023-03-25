import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RiegoComponent } from './riego.component';
import { HistorialComponent } from './historial/historial.component';
import { PagEcoPage } from '../pag-eco/pag-eco.page';
import { PagEcoPageModule } from '../pag-eco/pag-eco.module';

const routes: Routes = [
  {
  path:'',
  component:RiegoComponent,
  pathMatch:'full'
  },
  {
    path:'historial',
    component: HistorialComponent,
  },
  {
    path: 'eco',
    loadChildren: () => import('../pag-eco/pag-eco.module').then( m => m.PagEcoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RiegoRoutingModule { }
