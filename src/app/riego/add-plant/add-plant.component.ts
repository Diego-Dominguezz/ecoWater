import { PlantasService } from './../../services/plantas.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { DateTime,  } from 'luxon';
import { TimeServiceService } from 'src/app/services/time-service.service';
import { take } from 'rxjs';


@Component({
  selector: 'app-add-plant',
  templateUrl: './add-plant.component.html',
  styleUrls: ['./add-plant.component.scss'],
})
export class AddPlantComponent  implements OnInit {
  form: FormGroup;
  luxonDate = DateTime.now().setZone('America/Denver');
  hours = '';

  constructor(
    private modalCtrl: ModalController,
    private timeService: TimeServiceService,
    private AuthService: AuthService,
    private PlantasService: PlantasService
    ) {
      this.form = new FormGroup({
        id: new FormControl(''),
        name: new FormControl('', Validators.required),
        size: new FormControl('', Validators.required),
        waterSchedule: new FormGroup({
          id: new FormControl(''),
          start: new FormControl(this.timeService.toISO()),
          end: new FormControl(this.timeService.getPlusSeconds(10).toISO()),
          duration: new FormControl(this.timeService.duration(this.timeService.getPlusSeconds(10).toMillis())),
          createdByUserId: new FormControl(this.AuthService.loggedUser?.user?.uid),
        }),
        waterHistory: new FormArray([]),
        msToWater: new FormControl(''),
        plantsGroupId: new FormControl(''),
        plantOwner: new FormControl(this.AuthService.loggedUser?.user?.uid),
        plantStats: new FormGroup({
          id: new FormControl(''),
          humidity: new FormControl(''),
          daysAlive: new FormControl(0),
          timesWatered: new FormControl(0),
          hitpoints: new FormControl(100),
        }),
      })

     }
  ngOnInit(): void {
    this.form.patchValue({
      msToWater: this.timeService.duration(this.timeService.getMilsFromIso(this.form.get(["waterSchedule", "start"])?.value)) });
    console.log('formatedDate', DateTime.now().setZone('America/Denver').toFormat('hh:mm:ss'), this.form.value);
    this.form.valueChanges.subscribe(x=>console.log(x));

  }
  hourChange(x:any){
    console.log(x)
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    if (!this.AuthService.loggedUser?.user) return alert('inicia sesion para continuar')
    this.PlantasService.postPlant(this.form.value).pipe(take(1)).subscribe(x=>console.log(x));
    return this.modalCtrl.dismiss(null,'confirm');
  }
}
