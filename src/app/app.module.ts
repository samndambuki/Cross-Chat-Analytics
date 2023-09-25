import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { EmailsentComponent } from './emailsent/emailsent.component';
import { YournameComponent } from './yourname/yourname.component';
import { YouremailComponent } from './youremail/youremail.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SignupComponent,
    FormsModule,
    RecaptchaModule,
    CommonModule,
    LoginComponent,
    ResetpasswordComponent,
    EmailsentComponent,
    YournameComponent,
    YouremailComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
