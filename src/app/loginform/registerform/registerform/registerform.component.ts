import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.scss']
})
export class RegisterformComponent implements OnInit {
    form:any;
  constructor() { }

  ngOnInit(): void {
  }

  submitform(form:any){
    console.log(form);
  }
  

  

}
