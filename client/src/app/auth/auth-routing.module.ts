import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateuserComponent } from './user/addUser/createuser.component';
import { EdituserComponent } from './user/editUser/edituser.component';

const routes: Routes = [
  { path: 'adduser', component: CreateuserComponent },
  { path: 'edituser', component: EdituserComponent }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }