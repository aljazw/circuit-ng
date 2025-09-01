import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { IonButton, IonContent, IonInput, IonItem, IonNote, ToastController } from '@ionic/angular/standalone';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { getErrorMessage } from '../form-validation';
import { AuthService } from '../../../core/services/auth.service';
import { HeaderComponent } from "../../../shared/components/header/header.component";
import { AuthButtonComponent } from "../auth-button/auth-button.component";
import { addIcons } from 'ionicons';
import { alertCircleOutline } from 'ionicons/icons';

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


  constructor(
    private authService: AuthService,
    private translate: TranslateService,
    private toastController: ToastController,
  ) {
    addIcons({ alertCircleOutline });

    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
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
      if (error.code === 'auth/invalid-credential') {
        this.translate.get('WRONG_CREDENTIALS').subscribe(msg => this.showErrorMessage(msg));
      } else {
        this.translate.get('LOGIN_FAILED').subscribe(msg => this.showErrorMessage(msg));
      }
    } finally {
      this.loading = false;
    }   
  }

  async showErrorMessage(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 3000,      
      color: 'danger',     
      position: 'top',    
      icon: 'alert-circle-outline' 
    });
    toast.present();
  }

  onFocus() {
    this.submitted = false;
  }


}
