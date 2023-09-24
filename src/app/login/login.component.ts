import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RecaptchaModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  //reCAPTCHA site key
  reCaptchaSiteKey = '6Le0_0UoAAAAAHvOJm5DIRsx7vp13dMDm5iJmI5Z';

  // Function to handle CAPTCHA resolution
  handleCaptchaResolved(event: any): void {
    console.log('CAPTCHA resolved with response:', event);
  }
}
