import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './auth/register/registration.component';
import {LoginComponent } from "./auth/login/login.component"
import { AuthguardGuard } from './auth/authguard.guard';
import { CreateuserComponent } from "./auth/user/addUser/createuser.component"
import { EdituserComponent } from "./auth/user/editUser/edituser.component"
import { DashboardComponent } from "./dashboard/dashboard.component"
import { ProductComponent } from './dashboard/products/products.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  // { path: 'create', component: CreateuserComponent,canActivate: [AuthguardGuard] },
  { path: 'create', component: CreateuserComponent },
  { path: 'edit', component: EdituserComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'product', component: ProductComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
