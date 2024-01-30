import { Component } from '@angular/core';
import { IGame } from '../../interfaces/game.interface.ts/game.interface';
import { PrincipalService } from '../../services/principal/principal.service';

@Component({
  selector: 'app-game-comming-soon',
  templateUrl: './game-comming-soon.component.html',
  styleUrl: './game-comming-soon.component.scss',
})
export class GameComingSoonComponent {
  games: IGame[];

  constructor(private principalService: PrincipalService) {
    this.games = this.principalService.getComingSoon();
  }
}
