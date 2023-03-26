import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfigecowaterPage } from './configecowater.page';

const routes: Routes = [
  {
    path: '',
    component: ConfigecowaterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfigecowaterPageRoutingModule {}
