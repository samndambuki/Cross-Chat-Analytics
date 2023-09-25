import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { EmailsentComponent } from './emailsent/emailsent.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { PasswordchangesuccessfulComponent } from './passwordchangesuccessful/passwordchangesuccessful.component';
import { YournameComponent } from './yourname/yourname.component';
import { YouremailComponent } from './youremail/youremail.component';
import { VerifyemailComponent } from './verifyemail/verifyemail.component';

const routes: Routes = [
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'',redirectTo:'/signup',pathMatch:'full'},
  {path:'resetpassword',component:ResetpasswordComponent},
  {path:'emailsent',component:EmailsentComponent},
  {path:'changepassword',component:ChangepasswordComponent},
  {path:'passwordchangesuccessful',component:PasswordchangesuccessfulComponent},
  {path:'yourname',component:YournameComponent},
  {path:'youremail',component:YouremailComponent},
  {path:'verifyemail',component:VerifyemailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
