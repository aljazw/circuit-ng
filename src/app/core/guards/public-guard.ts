import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { User } from '../../shared/models/user.model';

export const publicGuard: CanActivateFn = async () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const user = await new Promise<User | null>(resolve => {
    const unsubscribe = authService.auth.onAuthStateChanged(u => {
      resolve(u);
      unsubscribe();
    });
  });

  return user ? router.createUrlTree(['/home']) : true;
};

