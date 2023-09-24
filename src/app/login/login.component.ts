import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';
import { Router, RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';

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

  showEmailSentModal: boolean = false;
  showChangePasswordModal: boolean = false;
  showChangePwdSuccess: boolean = false;

  openShowEmailSentModal() {
    this.showEmailSentModal = true;
  }

  closeShowEmailSentModal() {
    this.showEmailSentModal = false;
  }

  openChangePasswordModal() {
    this.closeShowEmailSentModal();
    this.showChangePasswordModal = true;
  }

  closeChangePasswordModal() {
    this.showChangePasswordModal = false;
  }

  openChangePasswordSuccessModal() {
    this.closeChangePasswordModal();
    this.showChangePwdSuccess = true;
  }

  closeChangePasswordSuccessModal() {
    this.showChangePwdSuccess = false;
    console.log('button cliked');
  }

  //reCAPTCHA site key
  reCaptchaSiteKey = '6Le0_0UoAAAAAHvOJm5DIRsx7vp13dMDm5iJmI5Z';

  // Function to handle CAPTCHA resolution
  handleCaptchaResolved(event: any): void {
    console.log('CAPTCHA resolved with response:', event);
  }
}
