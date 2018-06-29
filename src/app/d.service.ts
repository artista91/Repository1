import { Injectable } from '@angular/core';

let now=new Date();

@Injectable({
  providedIn: 'root'
})
export class DService {
time=now;

  constructor() { }



  myData(){
  	return 'This is my data,man!';
  }
}
