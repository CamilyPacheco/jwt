import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'] // Corregir esta línea de código para que sea "styleUrls"
})
export class NavbarComponent implements OnInit {
  username: string = '';

  constructor(public auth: AuthService, @Inject(DOCUMENT) public document: Document, private router: Router) {}

  ngOnInit(): void {
    this.username = localStorage.getItem('username') || '';
  }

  

  // Función para manejar el cierre de sesión
  onLogout() {
    this.auth.logout();
    console.log('User logged out');
    this.router.navigate(['/login']);
    // Puedes mantener el navbar visible después de cerrar sesión
    // Dejar que el usuario decida salir de la página o navegar a otra parte
  }
}
