import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductRoutingModule } from './products/product-routing.module';
import { ProductComponent } from './products/products.component';
import { DashboardComponent } from './dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    ProductRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
})
export class DashboardModule { }
