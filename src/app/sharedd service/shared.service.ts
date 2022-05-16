import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
result:any;
subResult:any;
mulResult:any;
divResult:any;
  constructor() { }

addition (a:any,b:any){
  return (a+b)
}
Sub (a:any,b:any){
  return (a-b)
}
mul (a:any,b:any){
  return (a*b)
}
div (a:any,b:any){
  return (a/b)
}
   }
  

 

