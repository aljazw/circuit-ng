import { Component, signal } from '@angular/core';
import { IonApp, IonContent, IonItem, IonLabel, IonList, IonMenu, IonMenuToggle, IonRouterOutlet, IonSelect, IonSelectOption, IonTitle, IonToolbar, IonFooter, IonButton } from '@ionic/angular/standalone';
import { TranslatePipe } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { IonMenuHeaderComponent } from "./shared/components/ion-menu-header/ion-menu-header.component";
import { AuthService } from './core/services/auth.service';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logOutOutline } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  imports: [
    IonApp,
    IonMenu,
    IonContent,
    IonList,
    IonMenuToggle,
    IonItem,
    IonLabel,
    IonRouterOutlet,
    TranslatePipe,
    RouterModule,
    IonMenuHeaderComponent,
    IonFooter,
    IonToolbar,
    IonButton,
    IonIcon
],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('circuit-admin');

  constructor (protected authService: AuthService) {
    addIcons({ logOutOutline });
  }

  
}
