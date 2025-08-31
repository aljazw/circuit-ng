import { Injectable, signal } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { User } from '../../shared/models/user.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser = signal<User | null>(null);
  
  constructor(public auth: Auth, private router: Router) {
    this.auth.onAuthStateChanged(user => {
      if (user) {
        this.currentUser.set({
          uid: user.uid,
          displayName: user.displayName,
          email: user.email
        });
      } else {
        this.currentUser.set(null);
      }
    });
  }

  async register(email: string, password: string): Promise<void> {
    return createUserWithEmailAndPassword(this.auth, email, password)
      .then(cred => {
        this.currentUser.set(cred.user);
        this.router.navigate(['/home']);
      })
  }

  async login(email: string, password: string): Promise<void> {
    return signInWithEmailAndPassword(this.auth, email, password)
      .then(cred => {
        this.currentUser.set(cred.user);
        this.router.navigate(['/home']);
      });
  }

  async logout(): Promise<void> {
    return signOut(this.auth)
      .then(() => {
        this.currentUser.set(null);
        this.router.navigate(['/login']);
      });
  }

  
}
