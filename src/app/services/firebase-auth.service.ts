import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {

  constructor(
    private fireAuth: AngularFireAuth 
  ) { }
  
  login(){
    this.fireAuth.signInWithEmailAndPassword('diegodguez@hotmail.com','123456').then(x=>{
      console.log('logged in', x);
    })
    console.log('login firebaseauth')
  }
  register(){
    console.log('register')
  }
}
