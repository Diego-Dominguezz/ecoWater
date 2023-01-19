import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RiegoComponent } from './riego/riego.component';
import { AppComponent } from './app.component';
import { AguaComponent } from './agua/agua.component';

const routes: Routes = [
  {
    path: "riego",
    component: RiegoComponent
  },
  {
    path: "agua",
    component: AguaComponent
  },
  {
    path: "",
    pathMatch: "full",
    component: AppComponent
  },
  {
    path: "*",
    component: AppComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
