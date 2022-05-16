import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.scss']
})
export class LoginformComponent implements OnInit {
  senddatavalue:any;
  receiver:any;
  constructor() {
    
   }

  ngOnInit(): void {
  }

  myfunction(form:any)
  {
    console.log(form);
    this.senddatavalue=form;
    console.log(this.senddatavalue);
  }

  outputdecoratorreceiver(event:any)
  {
    this.receiver=event;
  }

}
