import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProtegidoComponent } from './components/protegido/protegido.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './components/home/home.component';
import { PrecioComponent } from './components/precio/precio.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'precios', component: PrecioComponent },
  { path: 'protegido', component: ProtegidoComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
