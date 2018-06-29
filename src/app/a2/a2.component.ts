import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';

@Component({
  selector: 'app-a2',
  templateUrl: './a2.component.html',
  styleUrls: ['./a2.component.css']
})
export class A2Component implements OnInit {

p="Cognizant";
msg2 ;
  constructor() { }

  ngOnInit() {
  }
set(data){

this.msg2=data;
 }
}
