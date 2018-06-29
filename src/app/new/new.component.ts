import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
 // template:
 // `
 // <button type="button" (click)="toggleExists()">Toggle Component</button>
 // <br>
 // <app-if-example *ngif="exists">
 // Hello
 // </app-if-example>
 // `
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {


exists=true;
condition=true;
toggleExists(){
  this.exists=!this.exists;
}


  oddNumbers =[1,3,5];
  evenNumbers=[2,4];
  onlyOdd=false;
  value=5;
  constructor() { 
  }

  ngOnInit() {
  }

}