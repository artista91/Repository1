import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-c2',
   templateUrl: './c2.component.html',
   styleUrls: ['./c2.component.css']
  //   template: `
  //   <div>
  //     {{ parentCount }}
  //   </div>
  // `
})
export class C2Component implements OnInit {

 @Input()
 public  parentCount: number;

msg2="cts";

@Output() event:EventEmitter<string> = new EventEmitter();

a:number=10;
b:number=20;
allowNewServer=false;
serverCreationStatus ='No server was created';
serverName='Testserver';

n="";
  constructor() { 
  setTimeout(() => {
  this.allowNewServer = true;
  },2000);}

  ngOnInit() {
  	
  }

Send(){
  this.event.emit(this.msg2);
}

onCreateServer(){
if(this.allowNewServer==false){
	return this.serverCreationStatus;
}
else{
  	return this.serverCreationStatus = 'Server was created! Name is' + this.serverName;
  }
  }


onAdd(){
  	if(this.allowNewServer==false){
	return 0;
}
else{
  	return this.a+this.b;
  }}
  onSub(){
  	 	if(this.allowNewServer==false){
	return 0;
}
  	return this.a-this.b;
  }
  onMul(){
  	 	if(this.allowNewServer==false){
	return 0;
}
else{
  	return this.a*this.b;
  }}
  onDiv(){
  	 	if(this.allowNewServer==false){
	return 0;
}
else{
  	return this.a/this.b;
  }}
getSum(){
	if(this.a%2==0){
		return "even";
	}
	else{
		return "odd";
	}


}




onadd(){


  	if(this.n=="1"){

  	return this.a+this.b;
  }
 
  	 	else if(this.n=="2"){

  	return this.a-this.b;
  }
 
  	 	else if(this.n=="3"){

  	return this.a*this.b;
  }

  	 	else if(this.n=="4"){

  	return this.a/this.b;
  }
}
}
// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-even-or-odd',
//   templateUrl: './even-or-odd.component.html',
//   styleUrls: ['./even-or-odd.component.css']
// })
// export class EvenOrOddComponent implements OnInit {
// a:number=10;
// b:number=20;
// allowNewServer=false;
// serverCreationStatus ='No server was created';
// serverName='Testserver';
//   constructor() { 
//   setTimeout(() => {
//   this.allowNewServer = true;
//   },2000);


//   }

//   ngOnInit() {
//   }

//   onCreateServer(){
// if(this.allowNewServer==false){
// 	return this.serverCreationStatus;
// }
// else{
//   	return this.serverCreationStatus = 'Server was created! Name is' + this.serverName;
//   }
//   }

//   onAdd(){
//   	if(this.allowNewServer==false){
// 	return 0;
// }
// else{
//   	return this.a+this.b;
//   }}
//   onSub(){
//   	 	if(this.allowNewServer==false){
// 	return 0;
// }
//   	return this.a-this.b;
//   }
//   onMul(){
//   	 	if(this.allowNewServer==false){
// 	return 0;
// }
// else{
//   	return this.a*this.b;
//   }}
//   onDiv(){
//   	 	if(this.allowNewServer==false){
// 	return 0;
// }
// else{
//   	return this.a/this.b;
//   }}
// getSum(){
// 	if(this.a%2==0){
// 		return "even";
// 	}
// 	else{
// 		return "odd";
// 	}
// }
// }
