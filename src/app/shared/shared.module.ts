import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularFireAuthModule
  ],
  exports:[
    ReactiveFormsModule,
    AngularFireAuthModule
  ]
})
export class SharedModule { }
