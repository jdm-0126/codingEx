import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { DataserviceService } from '../service/dataservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate  {

  constructor(private dataService: DataserviceService,private router: Router  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const routeurl: string = state.url;
    return this.isLogin(routeurl);
  }
  isLogin(routeurl: string) {
    if (this.dataService.isLoggedIn()) {
      return true;
    }
    else {
      this.dataService.redirectUrl = routeurl;
      this.router.navigate(['/login'], {queryParams: { returnUrl: routeurl }} );
      return false}


  }
}
