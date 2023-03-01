import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseAuthService } from '../services/firebase-auth.service';

@Component({
  selector: 'app-agua',
  templateUrl: './agua.component.html',
  styleUrls: ['./agua.component.scss']
})
export class AguaComponent implements OnInit {

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl(''),
    confirm: new FormControl('')
  })

  constructor(
    private authService: FirebaseAuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.authService.login();
  }
  register(form: any) {
    console.log(form);
    this.authService.register();
  }

}
