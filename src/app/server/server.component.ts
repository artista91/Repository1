import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  num1:number=12;
  num2:number=20;
  
  constructor() { }

  ngOnInit() {
  }
  getSum(){
    return this.num1+this.num2;
  }
  getSubs(){
    return this.num1-this.num2;
  }
  
  

}
