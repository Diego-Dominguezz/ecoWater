import { Injectable } from '@angular/core';
import { Plant } from '../../app/models/planta.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlantasService {

  plantsArray: Plant[] = [];

  constructor(
    private http: HttpClient,
  ) {
    this.plantsArray.push({
      id:'123455',
      msToWater: 500,
      name: 'plantica de prueba',
      plantOwner: '123',
      plantsGroupId: '123454',
      plantStats:{
        daysAlive:5,
        hitpoints: 100,
        humidity: '50',
        id: '123456789',
        timesWatered: 5
      },
      size: 'large',
      waterHistory: [{
        createdByUserId: "123",
        duration: 500,
        end: 123456,
        id: '500543',
        start: 123455
      }],
      waterSchedule: {
        createdByUserId:"123",
        duration: 500,
        end: 123456,
        id: '500544',
        start: 123455
      }

    })

    console.log('plants array',this.plantsArray);
    this.getUsers();

  }
  getUsers(){
    return this.http.get<any[]>(this.getServer('auth')).subscribe((x)=>{
      console.log('encontre planta',x)
    })
  }

  getServer(route: string){
    return 'http://localhost:3000/' + route;
  }
}
