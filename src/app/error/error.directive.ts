import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appError]'
})
export class ErrorDirective implements OnInit{ 

  abc:any="kokila";

  constructor(private element:ElementRef) { 
    console.log(element);
  }
    
    ngOnInit(): void {
      if(this.abc=="kokila")
      {
        this.element.nativeElement.style.color="red";
        this.element.nativeElement.style.backgroundColor="pink";
      }
  }
}
