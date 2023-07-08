import { Component ,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommunicateService } from 'src/app/services/communicate.service';
import { QuestionServiceService } from 'src/app/services/question-service.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.css']
})
export class TestPageComponent implements OnInit {
  public name:string=''
  public result:any=[];
  public token:any;
  public questions:any=[];
  public userDetails:any=[];
  public Answer:any=[];
  constructor(private router:Router,private service:UserService ,private questionservice:QuestionServiceService){
     this.token=localStorage.getItem('token');
     this.service.getUserWithToken(this.token).subscribe({
      next:(res:any)=>{
        this.userDetails=res.msg;
      },error:(ex:any)=>{
        console.log("error : ",ex);
      }
     })
      
    // 
    this.questionservice.getQuestions().subscribe(
      {
        next:(res:any)=>{
          this.questions=res.msg;
          res.msg.map((element:any) => {
            let object = {question: element.question, answer: ""}
            this.Answer.push(object)
          });
        },error:(ex:any)=>{
          console.log("error : ",ex);
        }
      }
    )
  }
  ngOnInit(): void {
      
  }
  add(question:any, answer:any){
      this.Answer.map((element: any)=>{
        if(element.question == question){
          element.answer = answer
        }
      })      
  }
  onSubmit(){
    this.questionservice.checkQuestion({answers: this.Answer}).subscribe(
      {
        next:(res:any)=>{
          this.result=res;
        },error:(ex:any)=>{
          console.log("error : ",ex);
        }
      }
    )
  }
  refresh(){
    this.router.navigateByUrl("/my-profile");
  }
}
