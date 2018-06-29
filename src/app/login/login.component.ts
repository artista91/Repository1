// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
name:string="";
pass:string="";
age:string="";
degree:string="";
address:string="";
contact:string="";
day=["1","2","3","4","5","6"];
month= ["January", "February", "March", "April","May", "June", "July", "August", "September","October", "November", "December"];
year=["1994","1995","1996","1997"];
result:string="LOGIN MODULE";
login=true;
image=false;
register=false;
  constructor() { }

  ngOnInit() {
  }
getLogin(){
	if(this.name==this.pass){
		this.result="Welcome "+this.name;
		this.image=true;
		this.login=false;
		return this.result;
		}
	else{
		this.result="Resgistration";
		this.register=true;this.image=false;this.login=false;
		return this.result;
	}
	}
}



