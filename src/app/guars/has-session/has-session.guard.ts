import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  RouterStateSnapshot,
} from '@angular/router';
import { Router } from '@angular/router';

export const hasSessionGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const isLogged = localStorage.getItem('isLogged');
  const router = inject(Router);

  if (isLogged) {
    return true;
  } else {
    console.log('No hay sesión');
    router.navigate(['/', 'autentification', 'login']);
    return false;
  }
};
