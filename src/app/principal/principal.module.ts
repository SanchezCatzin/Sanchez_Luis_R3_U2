import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { PrincipalRoutingModule } from './principal-routing.module';
import { GameAddComponent } from './game-add/game-add.component';
import { PrincipalComponent } from './principal/principal.component';
import { GamePopularComponent } from './game-popular/game-popular.component';
import { GameComingSoonComponent } from './game-comming-soon/game-comming-soon.component';
import { GameMoreDownloadedComponent } from './game-more-downloaded/game-more-downloaded.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    GameAddComponent,
    PrincipalComponent,
    GamePopularComponent,
    GameComingSoonComponent,
    GameMoreDownloadedComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ComponentsModule,
    PrincipalRoutingModule,
  ],
  exports: [GameAddComponent, PrincipalComponent],
})
export class PrincipalModule {}
