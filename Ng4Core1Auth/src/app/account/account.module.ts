import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { UserService } from '../shared/services/user.service';
import { EmailValidator } from '../shared/directives/email.validator.directive';

import { routing } from './account.routing';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
    SharedModule
  ],
  declarations: [
    RegistrationComponent,
    EmailValidator,
    LoginComponent
  ],
  providers: [
    UserService
  ]
})
export class AccountModule { }
