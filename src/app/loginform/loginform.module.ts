import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginformRoutingModule } from './loginform-routing.module';
import { RegisterformComponent } from './registerform/registerform/registerform.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegisterformComponent
  ],
  imports: [
    CommonModule,
    LoginformRoutingModule,
    FormsModule
  ]
})
export class LoginformModule { }
