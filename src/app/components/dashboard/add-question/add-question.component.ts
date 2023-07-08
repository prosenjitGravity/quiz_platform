import { Component,OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { QuestionServiceService } from 'src/app/services/question-service.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  public questionFormData:any=[];
  constructor(private builder:FormBuilder,private service:QuestionServiceService){

  }
  ngOnInit(){
    this.questionFormData=this.builder.group(
      {
        question:['',[Validators.required]],
        options:this.builder.group({
          op1:['',[Validators.required]],
          op2:['',[Validators.required]],
          op3:['',[Validators.required]],
          op4:['',[Validators.required]],
        }),
        ans:['',[Validators.required]],
      }
    );
  }
  onSubmit(){
    let question=this.questionFormData.value.question;
    let option=this.questionFormData.value.options;
    let ans=this.questionFormData.value.ans;
    this.service.addedQuestion({"question":question,'options':[option.op1,option.op2,option.op3,option.op4],"answer":ans}).subscribe(
      {
        next:(response:any)=>{
        },error:(ex:any)=>{
          console.log("error : ",ex)
        }
      }
      )
  }
}
