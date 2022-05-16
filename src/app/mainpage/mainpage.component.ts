import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SharedService } from '../sharedd service/shared.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {
  @Input() msg:any;
  @Output() msgEvent=new EventEmitter<any>();
  data:any="This data sharing from mainpagecomponent to loginform component"
a=10;
b=3;
result:any;
subResult:any;
mulResult:any;
divResult:any;
  constructor(private addservice:SharedService) { }

  ngOnInit(): void {
   this.result= this.addservice.addition(this.a,this.b);
   console.log(this.result)
   this.subResult = this.addservice.Sub(this.a,this.b)
   console.log(this.subResult)
   this.mulResult = this.addservice.mul(this.a,this.b)
   console.log(this.mulResult)
   this.divResult = this.addservice.div(this.a,this.b)
   console.log(this.divResult)
   this.addservice.result;
   this.addservice.subResult;
   this.addservice.mulResult;
   this.addservice.divResult;
}
  outputdecoratorfunction(){
    this.msgEvent.emit(this.data);
  }


}
