import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { GroupComponent } from './group/group.component';



@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    GroupComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AutentificationModule { }
