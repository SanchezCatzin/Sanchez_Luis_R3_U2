import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { PrincipalRoutingModule } from './principal-routing.module';
import { GameListComponent } from './game-list/game-list.component';
import { GameAddComponent } from './game-add/game-add.component';
import { PrincipalComponent } from './principal/principal.component';



@NgModule({
  declarations: [
    GameListComponent,
    GameAddComponent,
    PrincipalComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    PrincipalRoutingModule
  ], exports: [
    GameListComponent,
    GameAddComponent,
    PrincipalComponent
  ]
})
export class PrincipalModule { }
