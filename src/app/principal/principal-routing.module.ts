import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { GameAddComponent } from './game-add/game-add.component';
import { GameListComponent } from './game-list/game-list.component';
import { hasSessionGuard } from '../guars/has-session/has-session.guard';


const routes: Routes = [
  { path: 'principal', component: PrincipalComponent, canActivate: [hasSessionGuard]},
  { path: 'game-add', component: GameAddComponent, canActivate: [hasSessionGuard]},
  { path: 'game-list', component: GameListComponent, canActivate: [hasSessionGuard]},
  { path: '**', redirectTo: 'principal', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrincipalRoutingModule {}
