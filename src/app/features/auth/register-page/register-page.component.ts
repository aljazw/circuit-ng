import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { IonButton, IonContent, IonInput, IonItem, IonNote } from '@ionic/angular/standalone';
import { TranslateModule } from '@ngx-translate/core';
import { getErrorMessage, passwordMatchValidator } from '../form-validation';


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
    RouterModule
  ]
})
export class RegisterPageComponent  implements OnInit {

  loginForm!: FormGroup;
  submitted = false;

  getError(field: string) {
    return getErrorMessage(this.loginForm.get(field), field, this.submitted);
  }


  constructor(private router: Router) {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(4)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl('', [Validators.required])
    }, {validators: passwordMatchValidator });
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
