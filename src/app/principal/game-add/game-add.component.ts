import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IGame } from '../../interfaces/game.interface.ts/game.interface';
import { PrincipalService } from '../../services/principal/principal.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-game-add',
  templateUrl: './game-add.component.html',
  styleUrl: './game-add.component.scss',
})
export class GameAddComponent {
  group: FormGroup;

  constructor(
    private router: Router,
    private principalService: PrincipalService
  ) {
    this.group = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', [Validators.required]),
      releaseDate: new FormControl('', [Validators.required]),
      rating: new FormControl('', [
        Validators.required,
        Validators.min(1),
        Validators.max(5),
      ]),
      downloads: new FormControl('', [Validators.required]),
      comingSoon: new FormControl(''),
    });
  }

  onAddGame() {
    console.log('FormGroup:', this.group.value, 'Valido:', this.group.status);
    const values = this.group.value;
    const formIsValid = this.group.valid;

    if (formIsValid) {
      console.log('formulario válido');
      const game: IGame = {
        title: values.title,
        description: values.description,
        releaseDate: values.releaseDate,
        rating: values.rating,
        downloads: values.downloads,
        comingSoon: values.comingSoon,
        image: '/assets/images/games/generic_game.jpg',
      };
      console.log('game:', game);
      this.principalService.addGame(game);
      this.router.navigate(['/', 'home', 'principal']);
    } else {
      console.error('El formulario no es valido');
    }
  }
}
