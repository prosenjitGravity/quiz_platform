import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommunicateService } from 'src/app/services/communicate.service';
import { QuestionServiceService } from 'src/app/services/question-service.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-exam-page',
  templateUrl: './exam-page.component.html',
  styleUrls: ['./exam-page.component.css']
})
export class ExamPageComponent implements OnInit {
  public found:boolean=false;
  public name:any='Prosenjit'
  public hide=true;
  public question:any=[]; 
  public userData:any=[];
  public  subject:String='Angular'
  constructor(private builder:FormBuilder, private http:HttpClient,private router:Router,private user_service:UserService,private ques:QuestionServiceService){
    this.ques.getQuestions().subscribe({
      next:(res:any)=>{
        this.question=res.msg;
      },error:(ex:any)=>{
        console.log("error : ",ex);
      }
    })

  }
  ngOnInit(): void {
      this.userData=this.builder.group(
        {
          first_name:['',[Validators.required,Validators.pattern("^[a-z A-Z]{3,20}$")]],
          last_name:['',[Validators.required,Validators.pattern("^[a-z A-Z]{3,20}$")]],
          email:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
          phone:['',[Validators.required,Validators.pattern('^[0-9]{10}$')]],
          gender:['',[Validators.required,]],
          password:['',[Validators.required]]
        }
      )
  }
  onSubmit(){
    let user=this.userData.value;
    this.found=true;
    this.user_service.addUser(
                              {
                                "first_name":user.first_name,
                                "last_name":user.last_name,
                                "email":user.email,
                                "phone":user.phone,
                                "gender":user.gender,
                                "password":user.password
                              }).subscribe({
                                next:(res:any)=>{
                                  this.router.navigateByUrl('/login') 
                                },error:(ex:any)=>{
                                  console.log("error : ",ex);
                                  this.found=false;
                                }
                              }) 
  }
}
