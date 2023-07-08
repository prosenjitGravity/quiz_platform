import { Component,OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public userDetails:any=[];
  public token:any;
  constructor(private service:UserService){}
  ngOnInit(): void {
     this.token=localStorage.getItem('token');
     this.service.getUserWithToken(this.token).subscribe({
      next:(res:any)=>{
        this.userDetails=res.msg;
      },error:(ex:any)=>{
        console.log("error : ",ex);
      }
     })
  }

}
