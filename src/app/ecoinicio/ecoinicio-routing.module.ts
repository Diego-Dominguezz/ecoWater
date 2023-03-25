import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EcoinicioPage } from './ecoinicio.page';

const routes: Routes = [
  {
    path: '',
    component: EcoinicioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EcoinicioPageRoutingModule {}
