import { Injectable } from '@angular/core';
import { IGame } from '../../interfaces/game.interface.ts/game.interface';

@Injectable({
  providedIn: 'root',
})
export class PrincipalService {
  private games: IGame[] = [
    {
      title: 'GTA V',
      description:
        'Grand Theft Auto V es un videojuego de acción-aventura de mundo abierto desarrollado por la compañía británica Rockstar North y distribuido por Rockstar Games.',
      releaseDate: '29/01/2024',
      image: 'assets/images/games/GTAV.png',
      rating: 5,
      downloads: 120000,
      comingSoon: true,
    },
    {
      title: 'Among Us',
      description:
        'Among Us es un videojuego multijugador en línea desarrollado por el estudio de videojuegos estadounidense InnerSloth.',
      releaseDate: '29/01/2024',
      image: 'assets/images/games/amongus.jpg',
      rating: 3,
      downloads: 13000000,
      comingSoon: true,
    },
    {
      title: 'Minecraft',
      description:
        'Minecraft es un videojuego de construcción, de tipo «mundo abierto» o sandbox creado originalmente por el sueco Markus Persson,​ y posteriormente desarrollado por su empresa, Mojang Studios.',
      releaseDate: '29/01/2024',
      image: 'assets/images/games/minecraft.png',
      rating: 5,
      downloads: 100000000,
      comingSoon: false,
    },
    {
      title: 'Fortnite',
      description:
        'Fortnite es un videojuego del año 2017 desarrollado por la empresa Epic Games, lanzado como diferentes paquetes de software que presentan diferentes modos de juego, pero que comparten el mismo motor general de juego y las mecánicas.',
      releaseDate: '29/01/2024',
      image: 'assets/images/games/fornite.jpg',
      rating: 2,
      downloads: 9500000,
      comingSoon: false,
    },
    {
      title: 'Call of Duty: Warzone',
      description:
        'Call of Duty: Warzone es un videojuego gratuito perteneciente al género battle royale desarrollado por Infinity Ward y Raven Software y distribuido por Activision.',
      releaseDate: '10/03/2020',
      image: 'assets/images/games/codwarzone.png',
      rating: 4,
      downloads: 100,
      comingSoon: true,
    },
    {
      title: 'League of Legends',
      description:
        'League of Legends es un videojuego del género multijugador de arena de batalla en línea y deporte electrónico desarrollado por Riot Games para Microsoft Windows y OS X.',
      releaseDate: '29/01/2013',
      image: 'assets/images/games/LOL.svg.png',
      rating: 2,
      downloads: 99,
      comingSoon: false,
    },
  ];

  constructor() {}

  getGames(): IGame[] {
    return this.games;
  }

  addGame(game: IGame): void {
    this.games.push(game);
  }

  getMorePopular(): IGame[] {
    return this.games.filter((game) => game.rating > 4);
  }

  getComingSoon(): IGame[] {
    return this.games.filter((game) => game.comingSoon);
  }

  getMoreDownloaded(): IGame[] {
    return this.games.filter((game) => game.downloads > 100);
  }
}
