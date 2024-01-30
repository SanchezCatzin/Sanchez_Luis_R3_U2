import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCardComponent } from './my-card/my-card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MyCardComponent, NavbarComponent],
  exports: [MyCardComponent, NavbarComponent],
  imports: [CommonModule, RouterModule],
})
export class ComponentsModule {}
