import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { DataserviceService } from '../../../service/dataservice.service';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {
  formGroup;

  constructor(private fb: FormBuilder,private dataService: DataserviceService,private router:Router) {

    this.formGroup = this.fb.group({
      email: ['', [Validators.required,Validators.minLength(1), Validators.email]],
      password: ['', Validators.required],
      name: ['', Validators.required],
    });
   }

  ngOnInit() {
  }
  postdata(formGroup:NgForm)
  {
    this.dataService.userregistration(formGroup.value.name,formGroup.value.email,formGroup.value.password)
      .pipe(first())
      .subscribe(
          data => {
              this.router.navigate(['dashboard']);
          },
          error => {
          });
  }
  get email() { return this.formGroup.get('email'); }
  get password() { return this.formGroup.get('password'); }
  get name() { return this.formGroup.get('name'); }
  // get token() { return this.formGroup.get('token'); }

}
