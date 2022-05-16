import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { LeftnavComponent } from './leftnav/leftnav.component';
import { LoginformComponent } from './loginform/loginform.component';
import { FormsModule } from '@angular/forms';
import { ErrorDirective } from './error/error.directive';
import { RightnavComponent } from './rightnav/rightnav/rightnav.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainpageComponent,
    LeftnavComponent,
    LoginformComponent,
    ErrorDirective,
    RightnavComponent,

   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

  ],
  providers:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
