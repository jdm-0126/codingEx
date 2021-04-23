import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AccountService, AlertService } from 'src/app/service';
import { Productmodule, ICategory, IBrand, IItem } from 'src/app/models/product.models';


@Component({ templateUrl: 'add-editproducts.component.html' })
export class AddEditComponent implements OnInit {
    form: FormGroup;
    formCat: FormGroup;
    formBrand: FormGroup;
    formItem: FormGroup;
    id: any;
    isAddMode = false;
    loading = false;
    submitted = false;
    product_has_child = false;
    products: Productmodule[] = [];
    categories: ICategory[] = [];
    brands: any = [];
    items: IItem[] =[];
    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private dataService: AccountService,
        private alertService: AlertService
    ) {
      this.form = this.formBuilder.group({
        label_id: [null],
        name: ['', Validators.required],
        route: [null, Validators.required],
    });
    this.formCat = this.formBuilder.group({
      label_id: [null],
      name: ['', Validators.required],
      route: [null, Validators.required],
      product_id: [null]
    });
    this.formBrand = this.formBuilder.group({
      label_id: [null],
      name: ['', Validators.required],
      route: [null, Validators.required],
      category_id: [null]
    });
    this.formItem = this.formBuilder.group({
      label_id: [null],
      name: ['', Validators.required],
      route: [null, Validators.required],
      brand_id: [null]
    });
    }

    ngOnInit() {
      this.getProdDetails();
      this.getCategories();
      this.getBrand();
      this.getAllItems();
        this.id = this.route.snapshot.params['id'];
        this.isAddMode = !this.id;

        // password not required in edit mode
        const passwordValidators = [Validators.minLength(6)];
        if (this.isAddMode) {
            passwordValidators.push(Validators.required);
        }



        if (!this.isAddMode) {
            this.dataService.getById(this.id)
                .pipe(first())
                .subscribe(x => this.form.patchValue(x));
        }
    }

    getProdDetails()
    {
      this.dataService.getAllProducts().subscribe((response: Productmodule[]) =>
        {
          this.products = response;
        });
      }

      getCategories() {
        {
          this.dataService.getAllCat().subscribe((response: ICategory[]) =>
            {
              this.categories = response;
            });
          }
      }

      getBrand() {
        {
          this.dataService.getAllBrand().subscribe((response: IBrand[]) =>
            {
              this.brands = response;
            });
          }
      }

      getAllItems() {
        {
          this.dataService.getItems().subscribe((response) =>
            {
              this.items = response;
            });
          }
      }
    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }
    onSubmitItem() {
      this.submitted = true;

      // reset alerts on submit
      this.alertService.clear();

      // stop here if form is invalid
      if (this.form.invalid) {
          return;
      }

      this.loading = true;
      if (this.isAddMode) {
          this.createItem();
      } else {
          // this.updateItem();
      }
    }
    onSubmitBrand() {
      this.submitted = true;

      // reset alerts on submit
      this.alertService.clear();

      // stop here if form is invalid
      if (this.form.invalid) {
          return;
      }

      this.loading = true;
      if (this.isAddMode) {
          this.createBrand();
      } else {
          // this.updateItem();
      }
    }
    onSubmitCat() {
      this.submitted = true;

      // reset alerts on submit
      this.alertService.clear();

      // stop here if form is invalid
      if (this.form.invalid) {
          return;
      }

      this.loading = true;
      if (this.isAddMode) {
          this.createCat();
      } else {
          this.updateUser();
      }
  }
    onSubmit() {
        this.submitted = true;

        // reset alerts on submit
        this.alertService.clear();

        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }

        this.loading = true;
        if (this.isAddMode) {
            this.createProd();
        } else {
            this.updateUser();
        }
    }
    private createBrand() {
      this.dataService.addBrand(this.form.value)
          .pipe(first())
          .subscribe({
              next: () => {
                  this.alertService.success('Brand added successfully', { keepAfterRouteChange: true });
                  this.router.navigate(['../'], { relativeTo: this.route });
              },
              error: error => {
                  this.alertService.error(error);
                  this.loading = false;
              }
          });
  }

    private createItem() {
      this.dataService.addItem(this.form.value)
          .pipe(first())
          .subscribe({
              next: () => {
                  this.alertService.success('Item added successfully', { keepAfterRouteChange: true });
                  this.router.navigate(['../'], { relativeTo: this.route });
              },
              error: error => {
                  this.alertService.error(error);
                  this.loading = false;
              }
          });
  }
  private createCat() {
    this.dataService.addCat(this.form.value)
        .pipe(first())
        .subscribe({
            next: () => {
                this.alertService.success('Category added successfully', { keepAfterRouteChange: true });
                this.router.navigate(['../'], { relativeTo: this.route });
            },
            error: error => {
                this.alertService.error(error);
                this.loading = false;
            }
        });
}
    private createProd() {
        this.dataService.addProduct(this.form.value)
            .pipe(first())
            .subscribe({
                next: () => {
                    this.alertService.success('Product added successfully', { keepAfterRouteChange: true });
                    this.router.navigate(['../'], { relativeTo: this.route });
                },
                error: error => {
                    this.alertService.error(error);
                    this.loading = false;
                }
            });
    }

    private updateUser() {
        this.dataService.updateProduct(this.id, this.form.value)
            .pipe(first())
            .subscribe({
                next: () => {
                    this.alertService.success('Update successful', { keepAfterRouteChange: true });
                    this.router.navigate(['../../'], { relativeTo: this.route });
                },
                error: error => {
                    this.alertService.error(error);
                    this.loading = false;
                }
            });
    }
}
