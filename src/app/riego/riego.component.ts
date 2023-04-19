import { PlantasService } from './../services/plantas.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AddPlantComponent } from './add-plant/add-plant.component';
import { TimeServiceService } from '../services/time-service.service';
import { Observable, take } from 'rxjs';
import { Plant } from '../models/planta.model';
import { EditPlantComponent } from './edit-plant/edit-plant.component';

@Component({
  selector: 'app-riego',
  templateUrl: './riego.component.html',
  styleUrls: ['./riego.component.scss'],
})
export class RiegoComponent  implements OnInit {
  plants = new Observable<Plant[]>

  constructor(
    private router: Router,
    public modalController: ModalController,
    private timeService: TimeServiceService,
    private plantasService: PlantasService
  ) { }

  ngOnInit() {
    // this.router.navigate(['riego','eco']);
    console.log();
    console.log(this.timeService.getPlusSeconds(10).toMillis());
    this.plants = this.plantasService.getPlants();
    this.plantasService.getPlants().subscribe(x => console.log(x));
  }
  deletePlant(plant: Plant){
    return this.plantasService.deletePlant(plant).pipe(take(1)).subscribe(x=>{
      console.log('finished deletion'), this.plants = this.plantasService.getPlants();
      this.plants.pipe(take(1)).subscribe();
    })
  }
  updatePlant (plant: Plant){
    console.log('update plan', plant);
  }
  async addPlant() {
    const modal = await this.modalController.create({
      component: AddPlantComponent,
      cssClass: 'my-modal-class',
      swipeToClose: false,
      animated: true,
      canDismiss: true,
      showBackdrop: true,
    });
    modal.onDidDismiss().then((x) => {
      if (x.role == "cancel") return
      console.log('finished creation'), this.plants = this.plantasService.getPlants();
      this.plants.pipe(take(1)).subscribe();
    });
    return await modal.present();
  }
  async editPlant(plant:Plant) {
    console.log(plant)
    const modal = await this.modalController.create({
      component: EditPlantComponent,
      componentProps:{
        plant: plant
      },
      cssClass: 'my-modal-class',
      swipeToClose: false,
      animated: true,
      canDismiss: true,
      showBackdrop: true,
    });
    modal.onDidDismiss().then((x) => {
      if (x.role == "cancel") return
        console.log('finished update'), this.plants = this.plantasService.getPlants();
        this.plants.pipe(take(1)).subscribe();
    });
    return await modal.present();
  }

}
