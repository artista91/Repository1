import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

	a:number=0;
	b:number=0;
	c:number=0;


	getSum(){
	this.c=+this.a+ +this.b;
	return this.c;
}
	getDiff(){
	this.c=this.a- this.b;
	return this.c;
}
	getMult(){
	this.c=this.a* this.b;
	return this.c;
}
	getDiv(){
	this.c=this.a/ this.b;
	return this.c;
}
	getMod(){
	this.c=this.a% this.b;
	return this.c;
}

  constructor() { }

  ngOnInit() {
  }

}
