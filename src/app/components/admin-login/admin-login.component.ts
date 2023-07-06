import { Component,OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit{
  public loginForm: any;
  public hide: Boolean = true;
  public login: String = 'assets/images/login.jpg'
  constructor(private builder:FormBuilder){}
  ngOnInit(): void {
      this.loginForm=this.builder.group(
        {
          email:['',[Validators.required]],
          password:['',[Validators.required]]
        }
      )
  }
  saveLogin(){
    console.log(this.loginForm.value);
  }

}
