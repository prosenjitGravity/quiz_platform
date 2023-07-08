import { Component ,OnInit } from '@angular/core';
import { CommunicateService } from 'src/app/services/communicate.service';
import { QuestionServiceService } from 'src/app/services/question-service.service';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.css']
})
export class TestPageComponent implements OnInit {
  public name:string=''
  public p=0;
  public questions:any=[];
  public userinfo:any=[];
  public favoriteSeason: string='';
  public Answer:any=[];
  constructor(private service:CommunicateService ,private questionservice:QuestionServiceService){
    this.service.Transfer.subscribe((res:any)=>{
      this.userinfo=res;
      console.log("test-page : ",this.userinfo);
      this.name=this.userinfo.first_name;
      console.log(this.name);  
    })
    // 
    this.questionservice.getQuestions().subscribe(
      {
        next:(res:any)=>{
          this.questions=res.msg;
          console.log(this.questions);
          res.msg.map((element:any) => {
            let object = {question: element.question, answer: ""}
            this.Answer.push(object)
          });
          console.log(this.Answer)
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
      console.log(this.Answer)
  }
}
