import { Component, Input } from '@angular/core';
import { IGame } from '../../interfaces/game.interface.ts/game.interface';
import { PrincipalService } from '../../services/principal/principal.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.scss',
})
export class PrincipalComponent {
  games: IGame[];

  constructor(private principalService: PrincipalService) {
    this.games = this.principalService.getGames();
  }
}
