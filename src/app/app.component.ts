

import {Component} from '@angular/core';
import {Service1Service} from './service1.service';
// import { DService} from './d.service';



@Component({
selector: 'app-root',
// template:`

// <p>{{ someProperty }}</p>

// `,
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})

export class AppComponent {

name;
id;
city;
  // constructor(private dataService:DService){

constructor(private ser_var: Service1Service){
  }


// someProperty:string = '';
// s:string = '';

ngOnInit(){

  // console.log(this.dataService.time);

  // this.someProperty = this.dataService.myData();
}

f1(){
	this.name=this.ser_var.emp1[0];
	this.id=this.ser_var.emp1[1];
	this.city=this.ser_var.emp1[2];
}

f2(){
	this.name=this.ser_var.emp2[0];
	this.id=this.ser_var.emp2[1];
	this.city=this.ser_var.emp2[2];
}

f3(){
	this.name=this.ser_var.emp3[0];
	this.id=this.ser_var.emp3[1];
	this.city=this.ser_var.emp3[2];
}



}

