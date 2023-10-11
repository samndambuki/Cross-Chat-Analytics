import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  Validators,
  FormsModule,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';
import { RouterModule } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { NgxCaptchaModule } from 'ngx-captcha';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RecaptchaModule, RouterModule,ReactiveFormsModule,NgxCaptchaModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  protected aFormGroup: FormGroup;

  email: string = '';
  password: string = '';

  constructor(private auth: AuthService, private formBuilder: FormBuilder) {
    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required],
    });
  }

  login() {
    if (this.email == '') {
      alert('Please enter email');
      return;
    }
    if (this.password == '') {
      alert('Please enter password');
      return;
    }

    this.auth.login(this.email, this.password);
    this.email = '';
    this.password = '';
  }

  //reCAPTCHA site key
  siteKey:string = '6LcKOZIoAAAAAEgQe-h_7Dud5MV4BKzlKK3HiIO_';

  // Function to handle CAPTCHA resolution
  handleCaptchaResolved(event: any): void {
    console.log('CAPTCHA resolved with response:', event);
  }
}
