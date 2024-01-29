import { Component, Input, OnInit } from '@angular/core';
import { IGame } from '../../interfaces/game.interface.ts/game.interface';

@Component({
  selector: 'app-my-card',
  templateUrl: './my-card.component.html',
  styleUrl: './my-card.component.scss',
})
export class MyCardComponent implements OnInit {
  @Input() game!: IGame;

  constructor() {}
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
