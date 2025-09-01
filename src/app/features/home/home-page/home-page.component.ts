import { Component, effect, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from "@ionic/angular/standalone";
import { HeaderComponent } from "../../../shared/components/header/header.component";
import { User } from 'firebase/auth';
import { AsyncPipe, DatePipe } from '@angular/common';
import { doc, docData, Firestore, getDoc } from '@angular/fire/firestore';
import { Observable, of, switchMap } from 'rxjs';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  imports: [
    IonContent, 
    HeaderComponent, 
    IonCard, 
    IonCardHeader, 
    IonCardTitle, 
    IonCardContent,
    DatePipe, 
    TranslateModule
  ],
})
export class HomePageComponent {

  userData: any = null;

  constructor(private authService: AuthService, private firestore: Firestore) {

    effect(() => {
      const user = this.authService.currentUser(); 
      if (!user) {
        this.userData = null;
        return;
      }

      this.loadUserData(user.uid);
    });
  }

  async loadUserData(uid: string) {
    const userDocRef = doc(this.firestore, 'users', uid);
    const userSnap = await getDoc(userDocRef);

    if (userSnap.exists()) {
      this.userData = { uid, ...userSnap.data() };
    }
  }
}
