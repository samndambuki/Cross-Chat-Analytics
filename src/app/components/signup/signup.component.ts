import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  email:string = ''
  password:string = ''


  constructor(private auth:AuthService){}

  register(){
    if(this.email == ''){
      alert("Please enter email")
      return
    }
    if(this.password == ''){
      alert("Please enter password")
      return
    }

    this.auth.login(this.email,this.password)
    this.email = ''
    this.password = ''
  }
}
