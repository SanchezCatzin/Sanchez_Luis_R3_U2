import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Import your authentication components here
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  // Define your authentication routes here
  { path: 'login', component: LoginComponent },
  { path: 'singup', component: SignupComponent },
  { path: '**', redirectTo: 'login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutentificationRoutingModule { }
