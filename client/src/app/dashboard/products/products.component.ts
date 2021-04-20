import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../../service/dataservice.service';
import { Usermodule } from '../../auth/user/usermodule';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductComponent implements OnInit {
  users: Usermodule[] = [];
  cat: any;

  constructor(private dataService: DataserviceService,private router:Router) { }

  ngOnInit() {
    this.getuserdetails();

  }
getuserdetails()
{
  this.dataService.getAllUsers(this.cat).subscribe(response =>
    {
      this.users = response.map(item =>
      {
        return new Usermodule(
          item.id,
            item.name,
            item.password,
            item.email,
            item.token,
        );
      });
    });
}
deleteuserdetails(user:Usermodule)
{
  this.dataService.removeUser(user.id)
  .subscribe( data => {
    //this.users = this.users.filter(u => u !== user);
    this.getuserdetails();
  })

}
updateUser(user: Usermodule): void {
  window.localStorage.removeItem("editId");
  window.localStorage.setItem("editId", user.id.toString());
  this.router.navigate(['edit']);
};
addUser(): void {
  this.router.navigate(['create']);
};
}
