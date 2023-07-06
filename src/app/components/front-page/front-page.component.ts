import { Component,OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent implements OnInit {
  public user_name:String='';
  public formData:any=[];
  constructor(private builder:FormBuilder){
  }
  ngOnInit(): void {
      this.formData=this.builder.group(
        {
          first_name:['',[Validators.required,Validators.pattern("^[a-z A-Z]{3,20}$")]],
          last_name:['',[Validators.required,Validators.pattern("^[a-z A-Z]{3,20}$")]],
          email:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
          phone:['',[Validators.required,Validators.pattern('^[0-9]{10}$')]],
          gender:['',[Validators.required]]
        }
      );
  }
  onSubmit(){
    console.log(this.formData);
  }

}
