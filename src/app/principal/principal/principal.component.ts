import { Component, Input } from '@angular/core';
import { IGame } from '../../interfaces/game.interface.ts/game.interface';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.scss'
})
export class PrincipalComponent {
  games: IGame[];

  constructor() {
    this.games = [
      {
        title: 'GTA V',
        description: 'Grand Theft Auto V es un videojuego de acción-aventura de mundo abierto desarrollado por la compañía británica Rockstar North y distribuido por Rockstar Games.',
        releaseDate: "29/01/2024",
        image: 'https://i.blogs.es/0c4d6e/gta-v/1366_2000.jpg',
        rating: 4,
        downloads: 1000000,
        commingSoon: true,
      },
      {
        title: 'Among Us',
        description: 'Among Us es un videojuego multijugador en línea desarrollado por el estudio de videojuegos estadounidense InnerSloth.',
        releaseDate: "29/01/2024",
        image: 'https://www.muycomputer.com/wp-content/uploads/2020/09/Among-Us.jpg',
        rating: 5,
        downloads: 1000000,
        commingSoon: false,
      },
      {
        title: 'Minecraft',
        description: 'Minecraft es un videojuego de construcción, de tipo «mundo abierto» o sandbox creado originalmente por el sueco Markus Persson,​ y posteriormente desarrollado por su empresa, Mojang Studios.',
        releaseDate: "29/01/2024",
        image: 'https://i.blogs.es/0c4d6e/gta-v/1366_2000.jpg',
        rating: 4,
        downloads: 1000000,
        commingSoon: false,
      },
      {
        title: 'Fortnite',
        description: 'Fortnite es un videojuego del año 2017 desarrollado por la empresa Epic Games, lanzado como diferentes paquetes de software que presentan diferentes modos de juego, pero que comparten el mismo motor general de juego y las mecánicas.',
        releaseDate: "29/01/2024",
        image: 'https://i.blogs.es/0c4d6e/gta-v/1366_2000.jpg',
        rating: 4,
        downloads: 1000000,
        commingSoon: false,
      }
    ]
  }
}
