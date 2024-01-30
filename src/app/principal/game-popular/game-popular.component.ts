import { Component } from '@angular/core';
import { PrincipalService } from '../../services/principal/principal.service';
import { IGame } from '../../interfaces/game.interface.ts/game.interface';

@Component({
  selector: 'app-game-popular',
  templateUrl: './game-popular.component.html',
  styleUrl: './game-popular.component.scss',
})
export class GamePopularComponent {
  games: IGame[];

  constructor(private principalService: PrincipalService) {
    this.games = this.principalService.getMorePopular();
  }
}
