import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { User } from '../../../shared/models/user.model';
import { IonHeader, IonToolbar, IonMenuToggle, IonContent, IonButtons, IonButton } from "@ionic/angular/standalone";
import { HeaderComponent } from "../../../shared/components/header/header.component";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  imports: [IonContent, HeaderComponent],
})
export class HomePageComponent  implements OnInit {
  constructor(protected authService: AuthService) { }

  ngOnInit() {}

  get user(): User {
    return this.authService.currentUser()!;
  }

}
