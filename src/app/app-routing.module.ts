import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItemComponent } from './item/item.component';
import { AuthGuardService as AuthGuard } from './auth-guard.service'; 


const routes: Routes = [
  {path:'' , pathMatch:'full', redirectTo:'login'},
  {path:'login', component:LoginComponent},
  {path:'board', component:DashboardComponent, canActivate: [AuthGuard] },
  {path:'item', component:ItemComponent , canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'login' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
