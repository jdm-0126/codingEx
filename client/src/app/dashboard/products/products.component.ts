import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../../service/dataservice.service';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { IBrand, ICategory, Productmodule } from 'src/app/models/product.models';

@Component({
  selector: 'app-product',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductComponent implements OnInit {
  products: Productmodule[] = [];
  categories: ICategory[] = [];
  brands: IBrand[] = [];
  cat: any;

  constructor(private dataService: DataserviceService,private router:Router) { }

  ngOnInit() {
    this.getProdDetails();
    this.getCategories();
    this.getBrand();

  }
  getProdDetails()
{
  this.dataService.getAllItems(this.cat).subscribe(response =>
    {
      this.products = response;
    });
  }

  getCategories() {
    {
      this.dataService.getAllCat(this.cat).subscribe(response =>
        {
          this.categories = response;
        });
      }
  }

  getBrand() {
    {
      this.dataService.getAllBrand(this.cat).subscribe(response =>
        {
          this.brands = response;
        });
      }
  }

deleteProduct(product:Productmodule)
{
  this.dataService.removeUser(product.label_id)
  .subscribe(() => {
    this.getProdDetails();
  })

}
updateProduct(product: Productmodule): void {
  window.localStorage.removeItem("product");
  window.localStorage.setItem("product", product.label_id.toString());
  this.router.navigate(['product']);
};
addProduct(): void {
  this.router.navigate(['create']);
};
}
