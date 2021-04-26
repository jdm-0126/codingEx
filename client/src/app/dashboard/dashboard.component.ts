import { Component, OnInit } from '@angular/core';
import { AccountService } from '../service/dataservice.service';
import { Usermodule } from '../models/user.models';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users: Usermodule[] = [];
  cat: any;

  constructor(private dataService: AccountService,private router:Router) { }

  ngOnInit() {
    this.getuserdetails();

  }
getuserdetails()
{
  this.dataService.getAllUsers().subscribe((response: any[]) =>
    {
      this.users = response;
    });
}
deleteuserdetails(user:Usermodule)
{
  this.dataService.removeUser(user.user_id)
  .subscribe( (data: any) => {
    //this.users = this.users.filter(u => u !== user);
    this.getuserdetails();
  })

}
updateUser(user: Usermodule): void {
  window.localStorage.removeItem("editId");
  window.localStorage.setItem("editId", user.user_id.toString());
  this.router.navigate(['edit']);
};
addUser(): void {
  this.router.navigate(['create']);
};
}
