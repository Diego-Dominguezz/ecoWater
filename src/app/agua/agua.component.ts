import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Plant } from '../models/planta.model';
import { PlantasService } from '../services/plantas.service';
import { TimeServiceService } from '../services/time-service.service';


@Component({
  selector: 'app-agua',
  templateUrl: './agua.component.html',
  styleUrls: ['./agua.component.scss'],
})
export class AguaComponent implements OnInit {
  plants = new Observable<Plant[]>


  constructor(
    private plantasService: PlantasService,
  ) {
    this.plants = this.plantasService.getPlants();
    this.plantasService.getPlants().subscribe(x => console.log(x));
  }

  ngOnInit() {


  }


}
