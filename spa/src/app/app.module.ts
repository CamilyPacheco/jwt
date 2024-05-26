import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PrecioComponent } from './components/precio/precio.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from '@auth0/auth0-angular';
import { AuthBottonComponent } from './components/auth-botton/auth-botton.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AuthComponent } from './components/auth/auth.component';
import { AuthLoginComponent } from './components/auth-login/auth-login.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PrecioComponent,
    ProtegidaComponent,
    AuthBottonComponent,
    AuthComponent,
    AuthLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule.forRoot({
      domain:"dev-gin5bkucdwzu3jbf.us.auth0.com",
      clientId:"3DMy4BQ5vbAqVCYBefZW95zv9HdTpemA", 
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
