import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AcquisitionComponent } from './components/acquisition/acquisition.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ContentComponent } from './components/content/content.component';
import { EmailsentComponent } from './components/emailsent/emailsent.component';
import { EngagedMembersAverageMessagesComponent } from './components/engaged-members-average-messages/engaged-members-average-messages.component';
import { EngagementComponent } from './components/engagement/engagement.component';
import { LoginComponent } from './components/login/login.component';
import { NewcommunityComponent } from './components/newcommunity/newcommunity.component';
import { OverviewComponent } from './components/overview/overview.component';
import { ResentemailComponent } from './components/resentemail/resentemail.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { RetentionComponent } from './components/retention/retention.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { VerifyemailComponent } from './components/verifyemail/verifyemail.component';
import { YouremailComponent } from './components/youremail/youremail.component';
import { YournameComponent } from './components/yourname/yourname.component';

@NgModule({
  declarations: [AppComponent],
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
    NewcommunityComponent,
    OverviewComponent,
    CalendarComponent,
    FontAwesomeModule,
    EngagementComponent,
    AcquisitionComponent,
    EngagedMembersAverageMessagesComponent,
    RetentionComponent,
    ContentComponent,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
