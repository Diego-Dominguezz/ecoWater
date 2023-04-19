import { Injectable } from '@angular/core';
import { Plant } from '../../app/models/planta.model';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlantasService {

  constructor(
    private http: HttpClient,
  ) {
  }
  postPlant(plant:Plant){
    return this.http.post<Plant>(this.getServer('plants/'),plant).pipe(tap((x) => {
      console.log('POSTPlant', x)
    }))
  }
  getPlants(){
    return this.http.get<Plant[]>(this.getServer('plants/')).pipe(tap((x)=>{
      console.log('encontre plantas',x)
    }))
  }
  getPlant(id: string) {
    return this.http.get<Plant>(this.getServer(`plants/${id}`)).pipe(tap((x) => {
      console.log('encontre planta', x)
    }))
  }
  putPLant(plant: Plant){
    return this.http.put(this.getServer(`plants/`), plant).pipe(tap(x=>{
      console.log('actualice planta', x)
    }))
  }
  deletePlant(plant: Plant){
    return this.http.delete(this.getServer(`plants/${plant.id}`));
  }

  getServer(route: string){
    return 'http://localhost:3000/' + route;
  }
}
