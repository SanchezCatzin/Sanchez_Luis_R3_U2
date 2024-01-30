import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class AuthService {
  private users: {
    id: number;
    name: string;
    email: string;
    password: string;
  }[] = [
    {
      id: 1,
      name: 'Juan',
      email: 'juan@juan.com',
      password: '123456',
    },
  ];

  constructor() {}

  login(email: string, password: string): boolean {
    const userFound = this.users.find(
      (user) => user.email === email && user.password === password
    );

    if (userFound) {
      localStorage.setItem('isLogged', JSON.stringify(userFound));
      return true;
    }
    localStorage.clear();
    return false;
  }

  logout(): void {
    localStorage.clear();
  }

  singIn(name:string, email:string, password:string) {
    const lastUser = this.users[this.users.length - 1];
    const newUser = {name, email, password, id: lastUser.id + 1};
    this.users.push(newUser);
    localStorage.setItem('isLogged', JSON.stringify(newUser));
  }
}
