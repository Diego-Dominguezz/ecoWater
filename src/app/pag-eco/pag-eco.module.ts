import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagEcoPageRoutingModule } from './pag-eco-routing.module';

import { PagEcoPage } from './pag-eco.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PagEcoPageRoutingModule,
    SharedModule,
  ],
  exports:[
    IonicModule,
  ],
  //declarations: [PagEcoPage]
})
export class PagEcoPageModule {}
