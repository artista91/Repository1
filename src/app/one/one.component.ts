import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

 sr="assets/im.png";
akshaya="5";
u="";
p="";
  constructor() { }

  ngOnInit() {
  }

validate(){
	if(this.u==this.p)
	{
		alert("Good morning "+ this.u);
		
	}
	else
	{
		alert("Invalid user");
	}
}
}
