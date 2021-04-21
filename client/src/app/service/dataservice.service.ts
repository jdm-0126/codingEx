import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usermodule } from '../models/user.models';
import { IBrand, ICategory, Productmodule } from '../models/product.models';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  redirectUrl: any;

  baseUrl:string = "http://localhost:8000";
@Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  constructor(private httpClient : HttpClient) { }
  public userlogin(username: any, password: any) {
    return this.httpClient.post<any>(this.baseUrl + '/login', { username, password })
        .pipe(map(Usermodule => {
            this.setToken(Usermodule[0].token);
            this.getLoggedInName.emit(true);
            return Usermodule;
        }));
}
public userregistration(name: any,email: any,password: any) {
  return this.httpClient.post<any>(this.baseUrl + '/user', { name,email, password })
      .pipe(map(Usermodule => {
          return Usermodule;
      }));
}
public updateuserdetails(id: any,name: any,email: any,password: any) {
  return this.httpClient.put<any>(this.baseUrl + '/user/'+id, { name,email,password })
    .pipe(map(Usermodule => {
          return Usermodule;
      }));

}
removeUser(empid: number): Observable<Usermodule[]> {
  return this.httpClient.delete<Usermodule[]>
  (this.baseUrl+'/user/'+empid );
}

public getUserId(empid: number): Observable<Usermodule[]>
  {
    return this.httpClient.get<Usermodule[]>
    (this.baseUrl+'/user/'+ empid );
  }

getAllUsers(id: number) : Observable<Usermodule[] > {
  return this.httpClient.get<Usermodule[]>(this.baseUrl+'/user');
}

getAllItems(id: number) : Observable<Productmodule[] > {
  return this.httpClient.get<Productmodule[]>(this.baseUrl+'/product');
}
getAllCat(id: number) : Observable<ICategory[] > {
  return this.httpClient.get<ICategory[]>(this.baseUrl+'/category');
}

getAllBrand(id: number) : Observable<IBrand[] > {
  return this.httpClient.get<IBrand[]>(this.baseUrl+'/brand');
}

//token
setToken(token: string) {
  localStorage.setItem('token', token);
}

getToken() {
  return localStorage.getItem('token');
}

deleteToken() {
  localStorage.removeItem('token');
}

isLoggedIn() {
  const usertoken = this.getToken();
  if (usertoken != null) {
    return true
  }
  return false;
}

}
