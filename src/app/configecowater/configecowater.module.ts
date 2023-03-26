import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfigecowaterPageRoutingModule } from './configecowater-routing.module';

import { ConfigecowaterPage } from './configecowater.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfigecowaterPageRoutingModule
  ],
  declarations: [ConfigecowaterPage]
})
export class ConfigecowaterPageModule {}
