import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FolderPage } from './folder.page';
import { AguaComponent } from '../agua/agua.component';

const routes: Routes = [
  {
    path: '**',
    component: FolderPage
  },
  {
    path: '',
    component: FolderPage
  },
  {path: 'Agua', component:AguaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
