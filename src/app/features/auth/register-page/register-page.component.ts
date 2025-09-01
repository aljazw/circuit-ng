import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonButton, IonContent, IonInput, IonItem, IonNote, ToastController } from '@ionic/angular/standalone';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { getErrorMessage, passwordMatchValidator } from '../form-validation';
import { AuthService } from '../../../core/services/auth.service';
import { HeaderComponent } from "../../../shared/components/header/header.component";
import { AuthButtonComponent } from "../auth-button/auth-button.component";
import { addIcons } from 'ionicons';
import { alertCircleOutline } from 'ionicons/icons';
import { doc, setDoc } from 'firebase/firestore';
import { Firestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: [
    './register-page.component.scss', 
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
export class RegisterPageComponent  implements OnInit {
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
    private firestore: Firestore
  ) {
  
    addIcons({ alertCircleOutline });

    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(4)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl('', [Validators.required])
    }, {validators: passwordMatchValidator });
  }

  ngOnInit() {}

  async submit() {
    this.submitted = true;

    if (!this.loginForm.valid) return;

    const { email, password, username } = this.loginForm.value;

    this.loading = true;

    try {
      const userCredential = await this.authService.register(email, password);
    
      if (userCredential.user) {
        const uid = userCredential.user.uid;
        await setDoc(doc(this.firestore, 'users', uid), {
          username,
          email,
          createdAt: new Date()
        });
      }
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        this.translate.get('EMAIL_IN_USE').subscribe(msg => this.showErrorMessage(msg));
      } else {
        this.translate.get('REGISTER_FAILED').subscribe(msg => this.showErrorMessage(msg));
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


