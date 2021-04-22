import { BrowserModule  } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ProductRoutingModule } from './auth-routing.module';
import { EdituserComponent } from './user/editUser/edituser.component';
import { CreateuserComponent } from './user/addUser/createuser.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    EdituserComponent,
    CreateuserComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ProductRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
})
export class AuthModule { }
