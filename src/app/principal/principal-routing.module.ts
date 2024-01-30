import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { GameAddComponent } from './game-add/game-add.component';
import { hasSessionGuard } from '../guars/has-session/has-session.guard';
import { GamePopularComponent } from './game-popular/game-popular.component';
import { GameCommingSoonComponent } from './game-comming-soon/game-comming-soon.component';
import { GameMoreDownloadedComponent } from './game-more-downloaded/game-more-downloaded.component';


const routes: Routes = [
  { path: 'principal', component: PrincipalComponent, canActivate: [hasSessionGuard]},
  { path: 'game-add', component: GameAddComponent, canActivate: [hasSessionGuard]},
  { path: 'game-popular', component: GamePopularComponent, canActivate: [hasSessionGuard]},
  { path: 'game-comming-soon', component: GameCommingSoonComponent, canActivate: [hasSessionGuard]},
  { path: 'game-more-downloaded', component: GameMoreDownloadedComponent, canActivate: [hasSessionGuard]},
  { path: '**', redirectTo: 'principal', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrincipalRoutingModule {}
