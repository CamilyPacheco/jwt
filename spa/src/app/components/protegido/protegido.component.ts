import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-protegido',
  templateUrl: './protegido.component.html',
  styleUrls: ['./protegido.component.css'] // Asegúrate de usar `styleUrls` en lugar de `styleUrl`
})
export class ProtegidoComponent implements OnInit {
  
  username: string = '';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    
    if (this.authService.isLoggedIn()){
      this.username = localStorage.getItem('username') || '';
    }
    
  }


}

