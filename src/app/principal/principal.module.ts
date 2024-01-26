import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { PrincipalRoutingModule } from './principal-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComponentsModule,
    PrincipalRoutingModule
  ]
})
export class PrincipalModule { }
