import { Directive ,ElementRef, OnInit,Renderer2,HostListener,HostBinding,Input} from '@angular/core';

@Directive({
  selector: '[appNewdir]'
})
export class NewdirDirective implements OnInit {

@Input() defaultColor:string ="assets/im.png";
@Input('appNewdir') highlightColor : string = "assets/d.png";
@HostBinding('style.fontFamily') backgroundColor:string;


  constructor(private elRe: ElementRef,private renderer : Renderer2) { }

ngOnInit(){
  	this.backgroundColor=this.defaultColor;
  }

   @HostListener('mouseenter') mouseover(eventData: Event) {
  	this.backgroundColor=this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData:Event) {
  	this.backgroundColor=this.defaultColor;
  }
}


