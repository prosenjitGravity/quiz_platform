import { Component ,HostListener,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public first_name:String='Merida'
  public profile_image:String="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg ";
  public user_image:String="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg ";
  isSticky: boolean = false;
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 80;
  }
  
  public userDetails:any=[];
  public token:any;
  constructor(private service:UserService,private router:Router){}
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
  logout(){
    localStorage.clear();
    alert('logout Successfully');
    this.router.navigateByUrl('/')
    
  }
}
