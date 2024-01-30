import { Component } from '@angular/core';
import { PrincipalService } from '../../services/principal/principal.service';
import { IGame } from '../../interfaces/game.interface.ts/game.interface';

@Component({
  selector: 'app-game-more-downloaded',
  templateUrl: './game-more-downloaded.component.html',
  styleUrl: './game-more-downloaded.component.scss',
})
export class GameMoreDownloadedComponent {
  games: IGame[];

  constructor(private principalService: PrincipalService) {
    this.games = this.principalService.getMoreDownloaded();
  }
}
