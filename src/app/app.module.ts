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
import { NewcommunityComponent } from './newcommunity/newcommunity.component';
import { OverviewComponent } from './overview/overview.component';
import { CalendarComponent } from './calendar/calendar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EngagementComponent } from './engagement/engagement.component';
import { EngagedMembersAverageMessagesComponent } from './engaged-members-average-messages/engaged-members-average-messages.component';
import { AcquisitionComponent } from './acquisition/acquisition.component';

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
    YouremailComponent,
    VerifyemailComponent,
    ResentemailComponent,
    NewcommunityComponent,
    OverviewComponent,
    CalendarComponent,
    FontAwesomeModule,
    EngagementComponent,
    AcquisitionComponent,
    EngagedMembersAverageMessagesComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
