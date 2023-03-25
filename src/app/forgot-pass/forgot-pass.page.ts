import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.page.html',
  styleUrls: ['./forgot-pass.page.scss'],
})
export class ForgotPassPage implements OnInit {
  form:FormGroup;

  constructor(
    private auth: AuthService
  ) {
    this.form = new FormGroup({
      email: new FormControl('', Validators.required)
    })
   }

  ngOnInit() {
  }
  submitForm(){
    this.auth.recoverPass(this.form.value);
  }


}
