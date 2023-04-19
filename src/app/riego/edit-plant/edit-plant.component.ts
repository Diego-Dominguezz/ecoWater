import { take } from 'rxjs';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { TimeServiceService } from 'src/app/services/time-service.service';
import { AuthService } from 'src/app/services/auth.service';
import { PlantasService } from 'src/app/services/plantas.service';
import { DateTime } from 'luxon';
import { Plant } from 'src/app/models/planta.model';

@Component({
  selector: 'app-edit-plant',
  templateUrl: './edit-plant.component.html',
  styleUrls: ['./edit-plant.component.scss'],
})
export class EditPlantComponent  implements OnInit {
  form: FormGroup;
  luxonDate = DateTime.now().setZone('America/Denver');
  hours = '';
  plant: Plant | undefined;

  constructor(
    private modalCtrl: ModalController,
    private timeService: TimeServiceService,
    private AuthService: AuthService,
    private PlantasService: PlantasService,
    private navParams: NavParams,
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
      msToWater: this.timeService.duration(this.timeService.getMilsFromIso(this.form.get(["waterSchedule", "start"])?.value))
    });
    console.log('formatedDate', DateTime.now().setZone('America/Denver').toFormat('hh:mm:ss'), this.form.value);
    this.form.valueChanges.subscribe(x => console.log(x));
    this.plant = this.navParams.get('plant');
    this.form.patchValue(this.plant as Plant);
  }
  hourChange(x: any) {
    console.log(x)
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    if (!this.form.touched) return
    this.PlantasService.putPLant(this.form.value).pipe(take(1)).subscribe(x => console.log(x));
    return this.modalCtrl.dismiss(null, 'confirm');
  }
}
