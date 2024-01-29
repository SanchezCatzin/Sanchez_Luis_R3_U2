import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { MyCardComponent } from './my-card/my-card.component';
import { ModalComponent } from './modal/modal.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ProgressBarComponent, MyCardComponent, ModalComponent, NavbarComponent],
  exports: [ProgressBarComponent, MyCardComponent, ModalComponent, NavbarComponent],
  imports: [CommonModule, RouterModule],
})
export class ComponentsModule {}
