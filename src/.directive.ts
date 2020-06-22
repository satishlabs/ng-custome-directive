import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[myHover]'
})
export class HoverDirective {

  constructor(
    private eleRef : ElementRef
  ) { }

  @HostListener("mouseover")
  onMourseOver(){
    console.log("onMourseOver");
    this.eleRef.nativeElement.classList.add("bg-info");
    this.eleRef.nativeElement.style.color = 'red';
    this.eleRef.nativeElement.style.border = '2px dotted blue';
  }
  @HostListener("mouseleave")
  onMouseLeave(){
    console.log("onMouseLeave");
    this.eleRef.nativeElement.classList.remove("bg-info");
    this.eleRef.nativeElement.style.color='black';
    this.eleRef.nativeElement.style.border='';


  }

}
