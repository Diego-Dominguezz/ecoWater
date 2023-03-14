import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistorialPage } from './historial/historial.page';
import { RiegoComponent } from './riego.component';

const routes: Routes = [
  {
  path:'',
  component:RiegoComponent,
  pathMatch:'full'
  },
  {
    path:'riego/historial',
    component: HistorialPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RiegoRoutingModule { }
