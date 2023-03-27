import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { UserCredential } from '@firebase/auth-types';
import { MenuController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedUser: UserCredential | undefined;
  sideMenu:boolean = false;

  constructor(
    private fireAuth: AngularFireAuth,
    private router: Router,
    private menuCtrl: MenuController,
  ) {
    this.menuCtrl.swipeGesture(false);
  }

  async login(formData: { email: string, password: string }) {
    try {
      const res: UserCredential = await this.fireAuth.signInWithEmailAndPassword(formData.email, formData.password);
      this.router.navigate(['ecoinicio']);
      this.sideMenu = true;
      this.menuCtrl.enable(this.sideMenu);
      this.menuCtrl.swipeGesture(this.sideMenu);
      this.loggedUser = res;
      return { "loggedIn": true, userData: res };
    } catch (error) {
      console.error(error);
      alert(error);
      return error;
    }
  }
  async register(formData: {email: string, name:string, lastName:string, password: string}){
    try {
      const res: UserCredential = await this.fireAuth.createUserWithEmailAndPassword(formData.email, formData.password);
      this.router.navigate(['ecoinicio']);
      res.user?.updateProfile({displayName:formData.name+" "+formData.lastName});
      this.loggedUser = res;
      this.sideMenu = true;
      this.menuCtrl.enable(this.sideMenu);
      this.menuCtrl.swipeGesture(this.sideMenu);
      return { "registered": true, userData: res };
    } catch (error) {
      console.error(error);
      alert(error);
      return error;
    }
  }
  recoverPass(formData: {email:string}) {
    this.fireAuth.sendPasswordResetEmail(formData.email).then(x=>{
      this.router.navigate(['login']);
    })
    .catch(x=>{
      alert(x);
    });
  }
  toggleSideMenu(param: boolean) {
    if (!param) return
    this.sideMenu = !this.sideMenu
    console.log('cambiando a ', this.sideMenu);
    this.menuCtrl.swipeGesture(this.sideMenu);
  }
  logout(){
    this.fireAuth.signOut();
    this.loggedUser = undefined;
    this.sideMenuFnc(false);
  }
  sideMenuFnc(bool:boolean){
    this.menuCtrl.enable(bool);
    this.menuCtrl.swipeGesture(bool);
  }

}
