import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  isLoggedIn: boolean = false;

  constructor(private authService: AuthService, private router: Router)  {}



  login(): void {
    this.authService.login(this.username, this.password).subscribe({
      next: response => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('username', this.username); 
        this.router.navigate(['/protegido']);
        
        
      },
      error: err => {
        this.errorMessage = 'Login failed';
        console.error(err);
        
      }
    });
  }
 
}


