import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { IonButton, IonContent, IonInput, IonItem, IonNote } from '@ionic/angular/standalone';
import { TranslateModule } from '@ngx-translate/core';
import { getErrorMessage } from '../form-validation';
import { AuthService } from '../../../core/services/auth.service';
import { HeaderComponent } from "../../../shared/components/header/header.component";
import { AuthButtonComponent } from "../auth-button/auth-button.component";

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
    RouterModule,
    HeaderComponent,
    AuthButtonComponent
]
})
export class LoginPageComponent  implements OnInit {
  loginForm!: FormGroup;
  submitted = false;

  loading = false;

  getError(field: string) {
    return getErrorMessage(this.loginForm.get(field), field, this.submitted);
  }


  constructor(private router: Router, private authService: AuthService) {
    this.loginForm = new FormGroup({
      email: new FormControl('joze@gmail.com', [Validators.required, Validators.email]),
      password: new FormControl('11111111', [Validators.required, Validators.minLength(8)])
    });
  }

  ngOnInit() {}

  async submit() {
    this.submitted = true;

    if (!this.loginForm.valid) return;

    const { email, password } = this.loginForm.value;

    this.loading = true;

    try {
      await this.authService.login(email, password);
    } catch (error: any) {
      console.error('Login failed:', error);
    } finally {
      this.loading = false;
    }   
  }

  onFocus() {
    this.submitted = false;
  }


}
