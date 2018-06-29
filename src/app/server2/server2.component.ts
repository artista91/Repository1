import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server2',
  templateUrl: './server2.component.html',
  styleUrls: ['./server2.component.css']
})
export class Server2Component implements OnInit {

serverName = 'hi';
serverCreateStatus = 'no server was created';
allowNewServer =false;
a: number = 324;
b: number = 23;
c: number = 0;



getSum(){
	this.c=this.a+ this.b;
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



  constructor() {
  setTimeout(() => {
  this.allowNewServer = true;
  },5000);
  }
  ngOnInit() {
  }
  onCreateServer(){
  this.serverCreateStatus = 'Server was created!';
  }
  // onUpdateServerName(event : Event){
  // this.serverName = (<HTMLInputElement>event.target).value;
  // }
}