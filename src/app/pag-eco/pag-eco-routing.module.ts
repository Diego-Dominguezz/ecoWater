import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagEcoPage } from './pag-eco.page';

const routes: Routes = [
  {
    path: '',
    component: PagEcoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagEcoPageRoutingModule {}
