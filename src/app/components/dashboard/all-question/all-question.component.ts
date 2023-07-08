import { Component, OnInit } from '@angular/core';
import { QuestionServiceService } from 'src/app/services/question-service.service';

@Component({
  selector: 'app-all-question',
  templateUrl: './all-question.component.html',
  styleUrls: ['./all-question.component.css']
})
export class AllQuestionComponent implements OnInit {
  public all_question:any=[];
  constructor(private service:QuestionServiceService){}
  ngOnInit():any {
    this.all_question=this.service.getQuestions().subscribe(
      {
        next:(question:any)=>{
          this.all_question=question.msg;
        },error:(ex:any)=>{
          console.log("error",ex);    
        }
      }  
    );
  }
}
