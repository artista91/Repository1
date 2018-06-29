import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-comp-two',
  templateUrl: './comp-two.component.html',
  styleUrls: ['./comp-two.component.css']
})
export class CompTwoComponent implements OnInit {

num1:number=0;
num2:number=0;
num3:number=0;

	@Input()
	parentCount:number;

	getSum(){
	this.num3=+this.num1+ +this.num2;
	return this.num3;
}
	getDiff(){
	this.num3=this.num1- this.num2;
	return this.num3;
}
	getMult(){
	this.num3=this.num1* this.num2;
	return this.num3;
}
	getDiv(){
	this.num3=this.num1/ this.num2;
	return this.num3;
}
	getMod(){
	this.num3=this.num1 % this.num2;
	return this.num3;
}
  constructor() { }

  ngOnInit() {
  }

 
}
