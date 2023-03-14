import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AguaComponent } from './agua.component';

const routes: Routes = [
  {
    path:"",
    pathMatch: 'full',
    component:AguaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AguaRoutingModule { }
