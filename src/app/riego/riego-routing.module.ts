import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RiegoComponent } from './riego.component';
import { HistorialComponent } from './historial/historial.component';

const routes: Routes = [
  {
  path:'',
  component:RiegoComponent,
  pathMatch:'full'
  },
  {
    path:'riego/historial',
    component: HistorialComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RiegoRoutingModule { }
