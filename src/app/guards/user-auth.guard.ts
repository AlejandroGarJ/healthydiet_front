import { CanActivateFn } from '@angular/router';
import { AuthService } from '../features/auth/auth.service';
import { inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

export const userAuthGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const token = localStorage.getItem('userAuth');

  return authService.checkUserAuth(token).pipe(
    map(response => {
      console.log(response);
      return response.response;
    })
  )
};