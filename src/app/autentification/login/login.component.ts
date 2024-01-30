import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private router: Router, private authService: AuthService) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}

  onLogin() {
    if (this.loginForm.valid) {
      console.log('Login válido');
      const isValidUser = this.authService.login(
        this.loginForm.value.email,
        this.loginForm.value.password
      );

      if (isValidUser) {
        this.router.navigate(['/', 'home']);
      } else {
        console.error('Usuario no encontrado');
      }

    } else {
      this.loginForm.markAllAsTouched();
      console.error('Login inválido');
    }
  }

  onSingin() {
    this.router.navigate(['/', 'autentification', 'singup']);
  }
}
