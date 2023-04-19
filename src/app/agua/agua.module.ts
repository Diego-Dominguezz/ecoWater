import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AguaRoutingModule } from './agua-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AguaComponent } from './agua.component';
import { IsoDatePipe } from '../pipes/iso-date.pipe';


@NgModule({
  declarations: [AguaComponent, IsoDatePipe],
  imports: [
    CommonModule,
    AguaRoutingModule,
    SharedModule
  ],
  exports:[
    SharedModule
  ]
})
export class AguaModule { }
