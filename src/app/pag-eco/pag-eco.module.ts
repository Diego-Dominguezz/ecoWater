import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagEcoPageRoutingModule } from './pag-eco-routing.module';

import { PagEcoPage } from './pag-eco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagEcoPageRoutingModule
  ],
  declarations: [PagEcoPage]
})
export class PagEcoPageModule {}
