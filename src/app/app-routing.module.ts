import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccessdeniedComponent } from './components/accessdenied/accessdenied.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { AccountSettingsComponent } from './components/account-settings/account-settings.component';
import { AcquisitionComponent } from './components/acquisition/acquisition.component';
import { BillingComponent } from './components/billing/billing.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ChangepasswordComponent } from './components/changepassword/changepassword.component';
import { ContentComponent } from './components/content/content.component';
import { EmailsentComponent } from './components/emailsent/emailsent.component';
import { EngagedMembersAverageMessagesComponent } from './components/engaged-members-average-messages/engaged-members-average-messages.component';
import { EngagementComponent } from './components/engagement/engagement.component';
import { FirstCommunityComponent } from './components/first-community/first-community.component';
import { NewcommunityComponent } from './components/newcommunity/newcommunity.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { OverviewComponent } from './components/overview/overview.component';
import { PasswordchangesuccessfulComponent } from './components/passwordchangesuccessful/passwordchangesuccessful.component';
import { ResentemailComponent } from './components/resentemail/resentemail.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { ResetpwdComponent } from './components/resetpwd/resetpwd.component';
import { RetentionComponent } from './components/retention/retention.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { VerifyemailComponent } from './components/verifyemail/verifyemail.component';
import { YouremailComponent } from './components/youremail/youremail.component';
import { YournameComponent } from './components/yourname/yourname.component';



const routes: Routes = [
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'resetpassword',component:ResetpasswordComponent},
  {path:'emailsent',component:EmailsentComponent},
  {path:'changepassword',component:ChangepasswordComponent},
  {path:'passwordchangesuccessful',component:PasswordchangesuccessfulComponent},
  {path:'yourname',component:YournameComponent},
  {path:'youremail',component:YouremailComponent},
  {path:'verifyemail',component:VerifyemailComponent},
  {path:'resentemail',component:ResentemailComponent},
  {path:'dashboard',component:UserDashboardComponent},
  {path:'settings',component:AccountSettingsComponent},
  {path:'billing',component:BillingComponent},
  {path:'notfound',component:NotfoundComponent},
  {path:'accessdenied',component:AccessdeniedComponent},
  {path:'resetpwd',component:ResetpwdComponent},
  {path:'firstcommunity',component:FirstCommunityComponent},
  {path:'newcommunity',component:NewcommunityComponent},
  {path:'overview',component:OverviewComponent},
  {path:'calendar',component:CalendarComponent},
  {path:'acquisition',component:AcquisitionComponent},
  {path:'engagement',component:EngagementComponent},
  {path:'enagagedMembersAverageMessages',component:EngagedMembersAverageMessagesComponent},
  {path:'retention',component:RetentionComponent},
  {path:'content',component:ContentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
