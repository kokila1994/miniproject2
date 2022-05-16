import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeftnavComponent } from './leftnav/leftnav.component';
import { LoginformComponent } from './loginform/loginform.component';
import { MainpageComponent } from './mainpage/mainpage.component';



const routes: Routes = [
  {path:"loginform",component:LoginformComponent},
  {path:"loginform",loadChildren:()=>import('./loginform/loginform.module').then(m=>m.LoginformModule)},
  {path:"leftnav",component:LeftnavComponent},
  {path:"leftnav",loadChildren:()=>import('./leftnav/leftnav.module').then(m=>m.LeftnavModule)},
  {path:"mainpage",component:MainpageComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
