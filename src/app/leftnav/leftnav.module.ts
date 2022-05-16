import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeftnavRoutingModule } from './leftnav-routing.module';
import { HomeComponent } from './home/home/home.component';
import { OurProductsComponent } from './Our Products/our-products/our-products.component';
import { LiveVideoComponent } from './Live Video/live-video/live-video.component';
import { DemoComponent } from './Demo/demo/demo.component';
import { ContactUsComponent } from './Contact Us/contact-us/contact-us.component';


@NgModule({
  declarations: [
    HomeComponent,
    OurProductsComponent,
    LiveVideoComponent,
    DemoComponent,
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    LeftnavRoutingModule
  ]
})
export class LeftnavModule { }
