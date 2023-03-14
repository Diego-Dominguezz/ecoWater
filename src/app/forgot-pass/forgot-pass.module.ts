import { NgModule } from '@angular/core';
import { ForgotPassPage } from './forgot-pass.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [ForgotPassPage]
})
export class ForgotPassPageModule {}
