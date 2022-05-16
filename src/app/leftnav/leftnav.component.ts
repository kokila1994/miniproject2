import { Component, OnInit } from '@angular/core';
import { SharedService } from '../sharedd service/shared.service';

@Component({
  selector: 'app-leftnav',
  templateUrl: './leftnav.component.html',
  styleUrls: ['./leftnav.component.scss']
})
export class LeftnavComponent implements OnInit {
 
  constructor(private  addservice: SharedService) { }

  ngOnInit(): void {
   
  }

}
