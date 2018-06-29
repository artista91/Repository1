import { ElementRef,Directive,OnInit } from '@angular/core';

@Directive({
  selector: '[appDirectiveTwo]'
})
export class DirectiveTwoDirective implements OnInit {

  constructor(private elementRef:ElementRef) { }
ngOnInit()
  {
  	this.elementRef.nativeElement.style.backgroundColor='lightblue';
  	this.elementRef.nativeElement.fontfamily='arial';
  }

}
