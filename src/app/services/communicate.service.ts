import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicateService {
  public Transfer:any=[];
  constructor() {
    this.Transfer=new Subject()
   }
}
