import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm  } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { DataserviceService } from '../../../service/dataservice.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {

  formGroup;

  constructor(
    private fb: FormBuilder,
    private dataService: DataserviceService,private router:Router) {

    this.formGroup = this.fb.group({
      email: ['', [Validators.required,Validators.minLength(1), Validators.email]],
      password: ['', Validators.required],
      name: ['', Validators.required],
      token: [''],
      id: ['']

    });
   }

  ngOnInit() {
    let id = window.localStorage.getItem("editid");
    if(!id) {
      this.router.navigate(['list-user']);
      return;
    }
    this.dataService.getUserId(+id)
      .subscribe( (data: any) => {
       // this.formGroup.controls[email].setValue('name')
       // this.email.nativeElement.value = 'This is new value';
        this.formGroup.patchValue({
          id:data[0].id,name: data[0].name, email: data[0].email, password: data[0].pwd, mobile: data[0].mobile

       });
      });
  }
  postdata(formGroup:NgForm)
  {
    this.dataService.updateuserdetails(formGroup.value.id, formGroup.value.name,formGroup.value.email,formGroup.value.password)

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
  get id() { return this.formGroup.get('id'); }

}
