import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PrecioComponent } from './components/precio/precio.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';
import { AuthBottonComponent } from './components/auth-botton/auth-botton.component';
import { AuthComponent } from './components/auth/auth.component';
import { AuthLoginComponent } from './components/auth-login/auth-login.component';
import { AuthGuard } from '@auth0/auth0-angular';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'precios', component:PrecioComponent},
  {path:'protegida', component:ProtegidaComponent, canActivate:[AuthGuard]},
  {path:'authbut', component:AuthLoginComponent},
  {path:'**', pathMatch:'full', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
