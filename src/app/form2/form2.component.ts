import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {

msg1="CTS";
msg2 ;

  constructor() { }

  ngOnInit() {
  }


set(data){

this.msg2=data;
 }

}
