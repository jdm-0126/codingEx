import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ProductComponent } from './products.component';
import { ProductRoutingModule } from './product-routing.module';
import { AddEditComponent } from './add-editproducts.component';

@NgModule({
  declarations: [
    ProductComponent,
    AddEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ProductRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
})
export class ProductModule { }
