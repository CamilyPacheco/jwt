import { Component, Inject } from '@angular/core';

// Import the AuthService type from the SDK
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-auth-button',
  template: '<button (click)="auth.loginWithRedirect()">Log in</button>',
  standalone: false
})
export class AuthBottonComponent {
  // Inject the authentication service into your component through the constructor
  constructor(public auth: AuthService) {}
}
