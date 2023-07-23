import { Component,OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit{
  public found:boolean=false;
  public token:any;
  public user_info:any=[]
  public loginForm: any;
  public hide: Boolean = true;
  public login: String = 'assets/images/login.jpg'
  constructor(private builder:FormBuilder,private service:UserService ,private router:Router){}
  ngOnInit(): void {
      this.loginForm=this.builder.group(
        {
          email:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
          password:['',[Validators.required]]
        }
      )
  }
  onLogin(){
    this.found=true;
    console.log(this.loginForm.value);
    this.service.loginUser({"email":this.loginForm.value.email,"password":this.loginForm.value.password}).subscribe({
      next:(res:any)=>{
        this.token = res.token;
        this.user_info = res
        localStorage.setItem("user", JSON.stringify(res))
        localStorage.setItem("token", this.token);
        alert("login successfully")
        this.router.navigateByUrl('/my-profile');
      },error:(ex)=>{
        this.found=false;
        console.log("error :",ex);
        alert("you are not registered user please Register");
      }
    });
  }

}
