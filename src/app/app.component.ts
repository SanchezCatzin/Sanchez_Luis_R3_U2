import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-v3';

  constructor(private router: Router) {}

  onGoToPrincipal(){
    this.router.navigate(['/', 'home']);
  }
}
