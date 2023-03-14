import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RiegoRoutingModule } from './riego-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RiegoComponent } from './riego.component';


@NgModule({
  declarations: [RiegoComponent],
  imports: [
    CommonModule,
    RiegoRoutingModule,
    SharedModule
  ],
  exports:[
    SharedModule
  ]
})
export class RiegoModule { }
