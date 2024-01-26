import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { MyCardComponent } from './my-card/my-card.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [ProgressBarComponent, MyCardComponent, ModalComponent],
  exports: [ProgressBarComponent, MyCardComponent],
  imports: [CommonModule],
})
export class ComponentsModule {}
