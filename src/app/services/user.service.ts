import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private get_Url:string="http://localhost:3002/user/";
  private post_Url:string="http://localhost:3002/user/register";
  private login_Url:string="http://localhost:3002/user/login";
  private get_token_Url:string="http://localhost:3002/user/my-profile";
  constructor(private http:HttpClient) { }
  getUser(){
    return this.http.get(this.get_Url);
  }
  addUser(data:any): Observable<any>{
    return this.http.post<any>(this.post_Url,data);
  }
  loginUser(data:any):Observable<any>{
    return this.http.post<any>(this.login_Url,data)
  }
  getUserWithToken(token:any){
    const headers = new HttpHeaders({
      'Authorization': `${token}`,
      'Content-Type': 'application/json'
    });
    return this.http.get(this.get_token_Url,{headers})
  }
}
