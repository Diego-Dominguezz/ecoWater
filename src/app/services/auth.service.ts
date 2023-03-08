import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { UserCredential } from '@firebase/auth-types';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLogged: boolean = true;

  constructor(
    private fireAuth: AngularFireAuth,
    private router: Router
  ) { }

  async login(formData: { email: string, password: string }) {
    try {
      const res: UserCredential = await this.fireAuth.signInWithEmailAndPassword(formData.email, formData.password);
      this.isLogged = true;
      this.router.navigate(['folder', 'inbox']);
      return { "loggedIn": true, userData: res };
    } catch (error) {
      console.error(error);
      alert(error);
      return error;
    }
  }
}
