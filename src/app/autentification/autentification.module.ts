import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { GroupComponent } from './group/group.component';
import { AutentificationRoutingModule } from './autentification-routing.module';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    GroupComponent
  ],
  imports: [
    CommonModule,
    AutentificationRoutingModule,
    ComponentsModule
  ]
})
export class AutentificationModule { }
