import { Component, OnInit } from '@angular/core';
import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonFooter, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenuToggle, IonNote, IonRow, IonToolbar } from '@ionic/angular/standalone';
import { TranslatePipe } from '@ngx-translate/core';
import { addIcons } from 'ionicons';
import { codeSlashOutline, informationCircleOutline, menuOutline, peopleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss'],
  imports: [
    IonButtons, 
    IonContent, 
    IonHeader,
    IonToolbar,
    IonIcon,
    IonMenuToggle,
    IonButton,
    TranslatePipe,
    IonCard,
    IonCardTitle,
    IonCardContent,
    IonCardHeader,
    IonFooter
  ]
})
export class AboutPageComponent  implements OnInit {

  constructor() {
    addIcons({ menuOutline, codeSlashOutline, peopleOutline, informationCircleOutline });
   }

  ngOnInit() {}

}
