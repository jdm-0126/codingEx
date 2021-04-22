import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm  } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { AccountService, AlertService} from '../../../service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  formGroup: any;
  id: number = 0;
  isAddMode: boolean = false;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private alertService: AlertService)
   {}

  ngOnInit() {
   // password not required in edit mode
   const passwordValidators = [Validators.minLength(6)];
   if (this.isAddMode) {
       passwordValidators.push(Validators.required);
   }

   this.formGroup = this.formBuilder.group({
       name: ['', Validators.required],
       email: ['', Validators.required],
       password: ['', passwordValidators]
   });

   if (!this.isAddMode) {
    this.accountService.getById(this.id)
        .pipe(first())
        .subscribe(x => this.formGroup.patchValue(x));
}
  }


  // convenience getter for easy access to form fields
  get f() { return this.formGroup.controls; }

  onSubmit() {
      this.submitted = true;

      // reset alerts on submit
      this.alertService.clear();

      // stop here if form is invalid
      if (this.formGroup.invalid) {
          return;
      }

      this.loading = true;
      if (this.isAddMode) {
          this.createUser();
      } else {
          this.updateUser();
      }
  }

  private createUser() {
    this.accountService.userregistration(this.formGroup.value)
      .pipe(first())
      .subscribe({
        next: () => {
          this.alertService.success('User added successfully', { keepAfterRouteChange: true });
          this.router.navigate(['../'], { relativeTo: this.route });
        },
        error: error => {
          this.alertService.error(error);
          this.loading = false;
        }
      });
  }

  private updateUser() {
    this.accountService.updateuserdetails(this.id, this.formGroup.value)
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
