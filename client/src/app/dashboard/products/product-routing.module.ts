import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEditComponent } from './add-editproducts.component';
import { ProductComponent } from './products.component';

const routes: Routes = [
  { path: 'product', component: ProductComponent },
  { path: 'editproduct', component: AddEditComponent }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { } 