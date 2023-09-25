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
import { ResentemailComponent } from './resentemail/resentemail.component';
import { VerifyemailComponent } from './verifyemail/verifyemail.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { Icon } from 'ionicons/dist/types/components/icon/icon';

@NgModule({
  declarations: [
    AppComponent,
    
    
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
    YouremailComponent,
    VerifyemailComponent,
    ResentemailComponent,
    UserDashboardComponent,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
