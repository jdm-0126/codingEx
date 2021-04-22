import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usermodule } from '../models/user.models';
import { IBrand, ICategory, IItem, Productmodule } from '../models/product.models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  redirectUrl: any;

  baseUrl:string = "http://localhost:8000";
@Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  constructor(private httpClient : HttpClient) { }
  public userlogin(email: any, password: any) {
    return this.httpClient.post<any>(this.baseUrl + '/login', { email, password })
        .pipe(map(Usermodule => {
            this.setToken(Usermodule[0].token);
            this.getLoggedInName.emit(true);
            return Usermodule;
        }));
}
userregistration(user: Usermodule) {
  return this.httpClient.post<any>(this.baseUrl + '/user', user)
      .pipe(map(Usermodule => {
          return Usermodule;
      }));
}
updateuserdetails(id: number, params: any) {
  return this.httpClient.put(`${environment.apiUrl}/user/${id}`, params)
    .pipe(map(Usermodule => {
          return Usermodule;
      }));
}
removeUser(empid: number): Observable<Usermodule[]> {
  return this.httpClient.delete<Usermodule[]>
  (this.baseUrl+'/user/'+empid );
}

getUserId(empid: number): Observable<Usermodule[]>
  {
    return this.httpClient.get<Usermodule[]>
    (this.baseUrl+'/user/'+ empid );
  }

  getById(id: number) {
    return this.httpClient.get<Usermodule>(`${environment.apiUrl}/user/${id}`);
}
getAllUsers(id: number) : Observable<Usermodule[] > {
  return this.httpClient.get<Usermodule[]>(this.baseUrl+'/user');
}

getAllProducts() : Observable<Productmodule[] > {
  return this.httpClient.get<Productmodule[]>(this.baseUrl+'/product');
}

addProduct(product: Productmodule) {
  return this.httpClient.post<any>(this.baseUrl + '/product', product)
      .pipe(map(Productmodule => {
          return Productmodule;
      }));
}
addCat(cat: ICategory) {
  return this.httpClient.post<any>(this.baseUrl + '/category', cat)
      .pipe(map(ICategory => {
          return ICategory;
      }));
}
addBrand(brand: IBrand) {
  return this.httpClient.post<any>(this.baseUrl + '/brand', brand)
      .pipe(map(IBrand => {
          return IBrand;
      }));
}
addItem(item: IItem) {
  return this.httpClient.post<any>(this.baseUrl + '/item', item)
      .pipe(map(IItem => {
          return IItem;
      }));
}
updateProduct(id: number, params: any) {
  return this.httpClient.put(`${environment.apiUrl}/product/${id}`, params)
    .pipe(map(Productmodule => {
          return Productmodule;
      }));
}

getAllCat() : Observable<ICategory[] > {
  return this.httpClient.get<ICategory[]>(this.baseUrl+'/category');
}

getAllBrand() : Observable<IBrand[] > {
  return this.httpClient.get<IBrand[]>(this.baseUrl+'/brand');
}

getItems() : Observable<IItem[] > {
  return this.httpClient.get<IItem[]>(this.baseUrl+'/item');
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
