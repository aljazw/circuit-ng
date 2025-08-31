import { Component, Input, OnInit } from '@angular/core';
import { IonButton, IonSpinner } from "@ionic/angular/standalone";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-auth-button',
  templateUrl: './auth-button.component.html',
  styleUrls: ['./auth-button.component.scss'],
  imports: [IonButton, TranslateModule, IonSpinner],
})
export class AuthButtonComponent  implements OnInit {
  @Input() loading = false;
  @Input() label = '';


  constructor() { }

  ngOnInit() {}

}
