import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { IonButton, IonContent, IonInput, IonItem, IonNote } from '@ionic/angular/standalone';
import { TranslateModule } from '@ngx-translate/core';
import { getErrorMessage } from '../form-validation';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: [
    './login-page.component.scss',
    '../styles/auth-common.scss'
  ],
  imports: [
    IonContent,
    IonItem,
    IonNote,
    IonButton,
    IonInput,
    TranslateModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class LoginPageComponent  implements OnInit {
  loginForm!: FormGroup;
  submitted = false;

  getError(field: string) {
    return getErrorMessage(this.loginForm.get(field), field, this.submitted);
  }


  constructor(private router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
  }

  ngOnInit() {}

  submit() {
    this.submitted = true;
    if (this.loginForm.valid) {
      this.router.navigate(['/home'])
    }
  }

  onFocus() {
    this.submitted = false;
  }


}
