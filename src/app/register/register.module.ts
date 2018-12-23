import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { CoreModule } from '../core/core.module';
import { RecaptchaModule } from 'ng-recaptcha';
@NgModule({
  imports: [
    CommonModule,
    RegisterRoutingModule,
    ReactiveFormsModule,
    CoreModule,
    RecaptchaModule.forRoot()
  ],
  declarations: [RegisterComponent]
})
export class RegisterModule { }
