import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { User } from 'firebase/auth';

export const authGuard: CanActivateFn = async (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const user = await new Promise<User | null>(resolve => {
    const unsubscribe = authService.auth.onAuthStateChanged(u => {
      resolve(u);
      unsubscribe(); 
    });
  });

  return user ? true : router.createUrlTree(['/login']);
};



