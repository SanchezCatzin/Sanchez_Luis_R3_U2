import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // Define your routes here
  {
    path: 'autentification',
    loadChildren: () =>
      import('./autentification/autentification.module').then(
        (m) => m.AutentificationModule
      ),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./principal/principal.module').then((m) => m.PrincipalModule),
  },
  { path: '**', redirectTo: 'autentification', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
