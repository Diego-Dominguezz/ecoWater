import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RiegoRoutingModule } from './riego-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RiegoComponent } from './riego.component';
import { HistorialComponent } from './historial/historial.component';
import { PagEcoPage } from '../pag-eco/pag-eco.page';


@NgModule({
  declarations: [RiegoComponent, HistorialComponent,PagEcoPage],
  imports: [
    CommonModule,
    RiegoRoutingModule,
    SharedModule
  ],
  exports:[
    HistorialComponent,
    SharedModule
  ]
})
export class RiegoModule { }
