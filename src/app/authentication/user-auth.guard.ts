import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthGuard implements CanActivate {
  canActivate(): boolean {
    let token=localStorage.getItem('token')
    if(!token){
      alert("please login ")
      return false;
    }
    return true;
  }
  
}
