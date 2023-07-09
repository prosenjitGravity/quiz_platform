import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultServiceService {
  private base_url:any='https://quiz-app-backend-pyj9.onrender.com/';
  private get_url:string=`${this.base_url}result`;
  private post_url:string=`${this.base_url}result/create`;
  constructor(private http:HttpClient) { }
  getResult(){
    return this.http.get(this.get_url);
  }
  addedQuestion(data:any): Observable<any>{
    return this.http.post<any>(this.post_url,data);
  }
}
