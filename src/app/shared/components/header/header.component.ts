import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonButtons, IonMenuToggle, IonButton, IonIcon } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { menuOutline } from 'ionicons/icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    IonHeader, 
    IonToolbar, 
    IonButtons, 
    IonMenuToggle, 
    IonButton,
    IonIcon

  ],
})
export class HeaderComponent  implements OnInit {

  constructor() { 
    addIcons({ menuOutline });
  }

  ngOnInit() {}

}


