import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RiegoRoutingModule } from './riego-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RiegoComponent } from './riego.component';
import { HistorialComponent } from './historial/historial.component';
import { PagEcoPage } from '../pag-eco/pag-eco.page';
import { AddPlantComponent } from './add-plant/add-plant.component';
import { EditPlantComponent } from './edit-plant/edit-plant.component';


@NgModule({
  declarations: [RiegoComponent, HistorialComponent,PagEcoPage, AddPlantComponent, EditPlantComponent],
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
