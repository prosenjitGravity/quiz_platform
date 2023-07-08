import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionServiceService {
  private get_url:string='http://localhost:3002/question';
  private post_url:string='http://localhost:3002/question/create';
  constructor(private http:HttpClient) { }

  getQuestions(){
    return this.http.get(this.get_url);
  }
  addedQuestion(data:any): Observable<any>{
    return this.http.post<any>(this.post_url,data);
  }
}
