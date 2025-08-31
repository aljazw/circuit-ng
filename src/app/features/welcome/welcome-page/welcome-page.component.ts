import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonButton, IonContent } from '@ionic/angular/standalone';
import { TranslatePipe } from '@ngx-translate/core';

import { HeaderComponent } from "../../../shared/components/header/header.component";


@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss'],
  imports: [
    IonContent,
    IonButton,
    TranslatePipe,
    RouterModule,
    HeaderComponent
]
})
export class WelcomePageComponent  implements OnInit {

  constructor() {}

  ngOnInit() {}

}
