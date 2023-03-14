import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RiegoComponent } from './riego.component';

const routes: Routes = [{
  path:'',
  component:RiegoComponent,
  pathMatch:'full'
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RiegoRoutingModule { }
