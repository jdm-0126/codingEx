import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/register/registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateuserComponent } from './auth/user/addUser/createuser.component';
import { EdituserComponent } from './auth/user/editUser/edituser.component';
import { ProductModule } from './dashboard/products/product.module';
import { AuthModule } from './auth/auth.module';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductModule,
    DashboardModule,
    AuthModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
