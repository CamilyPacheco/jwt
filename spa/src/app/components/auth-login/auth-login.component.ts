import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrl: './auth-login.component.css'
})
export class AuthLoginComponent {
  constructor(public auth: AuthService){

  }
  login(){
  this.auth.loginWithRedirect()
  }
}
