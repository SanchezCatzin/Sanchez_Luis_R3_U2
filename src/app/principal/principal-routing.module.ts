import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { GameAddComponent } from './game-add/game-add.component';
import { GameListComponent } from './game-list/game-list.component';


const routes: Routes = [
  { path: 'principal', component: PrincipalComponent },
  { path: 'game-add', component: GameAddComponent },
  { path: 'game-list', component: GameListComponent},
  { path: '**', redirectTo: 'principal', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrincipalRoutingModule {}
