import { Component, signal } from '@angular/core';
import { IonApp, IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonList, IonMenu, IonMenuButton, IonMenuToggle, IonRouterOutlet, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageService } from './core/services/language.service';
import { RouterModule } from '@angular/router';

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
    IonSelect,
    IonSelectOption,
    IonHeader,
    IonToolbar,
    IonButtons,
    TranslatePipe,
    RouterModule


  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('circuit-admin');

  constructor (protected langService: LanguageService) {}

  get currentLanguage() {
    return this.langService.getLanguage();
  }
  
}
