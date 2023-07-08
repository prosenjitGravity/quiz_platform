import { Component ,OnInit } from '@angular/core';
import { ResultServiceService } from 'src/app/services/result-service.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  public all_result:any=[];
  constructor(private service:ResultServiceService){
  }
  ngOnInit(): void {
      this.service.getResult().subscribe({
        next:(result:any)=>{
          this.all_result=result.msg;
        },error:(ex:any)=>{
          console.log("Error : ",ex);
        }
      })
  }

}
