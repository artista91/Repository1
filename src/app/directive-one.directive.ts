

import { Directive, ElementRef, OnInit,Renderer2,HostListener,HostBinding,Input } from '@angular/core';

@Directive({
  selector: '[appDirectiveOne]'
})
export class DirectiveOneDirective implements OnInit{

@Input() defaultColor:string ='transparent';
@Input('appDirectiveOne') highlightColor : string = 'blue';
@HostBinding('style.borderColor') backgroundColor:string;

  constructor(private elementRef: ElementRef,private renderer : Renderer2) { }
  ngOnInit()
  {
  	this.elementRef.nativeElement.style.backgroundColor='lightgreen';
  	  	this.elementRef.nativeElement.fontfamily='arial';

  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
  	this.backgroundColor=this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData:Event) {
  	this.backgroundColor=this.defaultColor;
  }

}
