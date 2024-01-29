import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import e from 'express';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}

  onLogin() {
    if (this.loginForm.valid) {
      console.log('Login válido');
      this.router.navigate(['/', 'home']);
    } else {
      this.loginForm.markAllAsTouched();
      console.error('Login inválido');
    }
  }

  onSingin() {
    this.router.navigate(['/', 'autentification', 'singup']);
  }
}
