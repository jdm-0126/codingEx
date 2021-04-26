import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ICategory, Productmodule } from 'src/app/models/product.models';
import { AccountService } from 'src/app/service';

@Component({
  selector: 'app-product',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductComponent implements OnInit {
  products: any = [];
  categories: any = [];
  brands: any = [];
  items: any =[];
  saveProduct: boolean = true;
  saveCat: boolean = false;
  constructor(private dataService: AccountService,private router:Router) { }

  ngOnInit() {
    this.getProdDetails();
    this.getCategories();
  }

  getProdDetails() {
          this.dataService.getAllProducts().subscribe((response: Productmodule[]) =>
            {
              this.products = response;
            });
          }

  getCategories() {
      this.dataService.getAllCat().subscribe((response: ICategory[]) =>
        {
          this.categories = response;
        });
  }

  // getBrand() {
  //     this.dataService.getAllBrand().subscribe((response: IBrand[]) =>
  //       {
  //         this.brands = response;
  //       });
  // }


  deleteProduct(product:Productmodule) {
    this.dataService.removeUser(product.label_id)
    .subscribe(() => {
      this.getProdDetails();
    })
  }

  updateProduct(product: Productmodule): void {
    window.localStorage.removeItem("editId");
    window.localStorage.setItem("editId", product.label_id.toString());
    this.router.navigate(['editproduct']);
  };

  addProduct(): void {
    this.router.navigate(['addproduct']);
  };

  onProductChanged(value:boolean){
    this.saveProduct = value;
  }

  onCatChanged(value:boolean){
    this.saveCat = value;
  }


}

