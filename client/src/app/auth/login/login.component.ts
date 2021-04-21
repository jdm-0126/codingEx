import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { DataserviceService } from '../../service/dataservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup: any;
  constructor(private fb: FormBuilder,private dataService: DataserviceService,private router:Router) {
    this.formGroup = this.fb.group({
      email: ['', [Validators.required,Validators.minLength(1), Validators.email]],
      password: ['', Validators.required]
    });
   }

  ngOnInit() {
  }
  postdata(formGroup:NgForm)
  {
    this.dataService.userlogin(formGroup.value.email,formGroup.value.password)
      .pipe(first())
      .subscribe(
          data => {
                const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/dashboard';
                this.router.navigate([redirect]);

          },
          error => {
              alert("Email or password is incorrect")
          });
  }
  get email() { return this.formGroup.get('email'); }
  get password() { return this.formGroup.get('password'); }
}
