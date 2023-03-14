import { NgModule } from '@angular/core';
import { ForgotPassPage } from './forgot-pass.page';
import { SharedModule } from '../shared/shared.module';
import { ForgotPassPageRoutingModule } from './forgot-pass-routing.module';

@NgModule({
  imports: [
    SharedModule,
    ForgotPassPageRoutingModule
  ],
  declarations: [ForgotPassPage]
})
export class ForgotPassPageModule {}
