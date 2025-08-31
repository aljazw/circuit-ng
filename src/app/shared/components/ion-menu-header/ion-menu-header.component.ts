import { Component, OnInit } from '@angular/core';
import { IonButtons, IonHeader, IonSelect, IonSelectOption, IonToolbar } from '@ionic/angular/standalone';
import { LanguageService } from '../../../core/services/language.service';

@Component({
  selector: 'app-ion-menu-header',
  templateUrl: './ion-menu-header.component.html',
  styleUrls: ['./ion-menu-header.component.scss'],
  imports: [
      IonSelect,
      IonSelectOption,
      IonHeader,
      IonToolbar,
      IonButtons,
  ]
})
export class IonMenuHeaderComponent  implements OnInit {

  constructor (protected langService: LanguageService) {}

  ngOnInit() {}

}
