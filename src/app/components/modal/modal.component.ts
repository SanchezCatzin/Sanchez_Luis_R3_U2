import { Component, OnInit} from '@angular/core';
import { on } from 'events';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent implements OnInit{
  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
