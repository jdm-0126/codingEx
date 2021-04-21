import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ProductComponent } from './products.component';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  declarations: [
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    ProductRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
})
export class ProductModule { }
