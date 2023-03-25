import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EcoinicioPageRoutingModule } from './ecoinicio-routing.module';

import { EcoinicioPage } from './ecoinicio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EcoinicioPageRoutingModule
  ],
  declarations: [EcoinicioPage]
})
export class EcoinicioPageModule {}
