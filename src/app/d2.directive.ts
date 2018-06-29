import { Directive ,ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appD2]'
})
export class D2Directive implements OnInit {

  constructor(private elementRef: ElementRef) {
   }

ngOnInit(){
  	this.elementRef.nativeElement.style.backgroundColor = 'red';
  }
}
