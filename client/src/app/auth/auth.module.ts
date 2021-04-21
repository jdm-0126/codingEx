import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ProductRoutingModule } from './auth-routing.module';
import { EdituserComponent } from './user/editUser/edituser.component';
import { CreateuserComponent } from './user/addUser/createuser.component';

@NgModule({
  declarations: [
    EdituserComponent,
    CreateuserComponent
  ],
  imports: [
    BrowserModule,
    ProductRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
})
export class AuthModule { }
