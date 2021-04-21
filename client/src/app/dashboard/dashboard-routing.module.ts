import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ProductComponent } from './products/products.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'product', component: ProductComponent }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }