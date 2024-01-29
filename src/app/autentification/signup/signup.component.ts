import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent implements OnInit {
  group: FormGroup;

  constructor(private router: Router) {
    this.group = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}

  onSignIn() {
    console.log('FormGroup:', this.group.value, 'Valido:', this.group.status);
    const values = this.group.value;
    const formIsValid = this.group.status === 'VALID';
    const controlName = this.group.get('name');

    if (values.password == values.confirmPassword && formIsValid) {
      console.log('formulario válido');
      this.router.navigate(['/', 'home']);
    } else {
      console.error('Las contraseñas no coinciden');
    }
  }
}
