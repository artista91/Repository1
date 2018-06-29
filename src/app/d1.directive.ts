import { Directive, ElementRef, OnInit,Renderer2,HostListener,HostBinding,Input } from '@angular/core';

@Directive({
  selector: '[appD1]'
})
export class D1Directive implements OnInit {

@Input() defaultColor:string ='transparent';
@Input('appD1') highlightColor : string = 'blue';
@HostBinding('style.borderColor') backgroundColor:string;

  constructor(private elementRef: ElementRef,private renderer : Renderer2) { 
  }

ngOnInit(){
  	this.elementRef.nativeElement.style.backgroundColor = 'green';
  }
  
  @HostListener('mouseenter') mouseover(eventData: Event) {
  	this.backgroundColor=this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData:Event) {
  	this.backgroundColor=this.defaultColor;
  }
  
}
