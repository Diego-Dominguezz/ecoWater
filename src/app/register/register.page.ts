import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  form: FormGroup;

  constructor(
    private auth:AuthService,
  ) {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
   }

  ngOnInit() {
    this.form.valueChanges.subscribe(x=>{
      console.log('form vaules', x);
    })
  }
  submitForm(){
    this.auth.register(this.form.value).then((x)=>{
      console.log('retorno', x)
    });
  }

}
