import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.form = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  ngOnInit() {
  }
  forgotNavigate(){
    console.log('navigate?')
    this.router.navigate(['forgotPass']).then(x=>{
      console.log('navigated',x)
    })
  }
  submitForm() {
    this.authService.login(this.form.value);
  }
  ngAfterViewInit(): void {
    this.authService.sideMenuFnc(false);
  }

}
