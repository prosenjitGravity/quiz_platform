import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionServiceService {
  private get_url:string='https://quiz-app-backend-pyj9.onrender.com/question/get-question';
  private post_url:string='https://quiz-app-backend-pyj9.onrender.com/question/create';
  private check_url:string='https://quiz-app-backend-pyj9.onrender.com/question/check';
  constructor(private http:HttpClient) { }

  getQuestions(){
    return this.http.get(this.get_url);
  }
  addedQuestion(data:any): Observable<any>{
    return this.http.post<any>(this.post_url,data);
  }
  checkQuestion(data:any):Observable<any>{
    return this.http.post(this.check_url,data);
  }
}
