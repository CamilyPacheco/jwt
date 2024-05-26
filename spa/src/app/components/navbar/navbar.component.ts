import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { AsyncPipe, DOCUMENT, NgIf } from '@angular/common';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(public auth: AuthService, @Inject(DOCUMENT) public document: Document){
    
  }
  login(){
  this.auth.loginWithRedirect()
  }
}
