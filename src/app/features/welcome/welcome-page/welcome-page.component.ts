import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonMenuButton, IonMenuToggle, IonToolbar } from '@ionic/angular/standalone';
import { TranslatePipe } from '@ngx-translate/core';
import { addIcons } from 'ionicons';
import { menuOutline } from 'ionicons/icons';


@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss'],
  imports: [
    IonButtons, 
    IonContent, 
    IonHeader,
    IonToolbar,
    IonIcon,
    IonMenuToggle,
    IonButton,
    TranslatePipe,
    RouterModule
  ]
})
export class WelcomePageComponent  implements OnInit {

  constructor() { 
    addIcons({ menuOutline });
  }

  ngOnInit() {}

}
