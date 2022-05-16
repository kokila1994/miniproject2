import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './Contact Us/contact-us/contact-us.component';
import { DemoComponent } from './Demo/demo/demo.component';
import { HomeComponent } from './home/home/home.component';
import { LiveVideoComponent } from './Live Video/live-video/live-video.component';
import { OurProductsComponent } from './Our Products/our-products/our-products.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"OurProducts",component:OurProductsComponent},
  {path:"LiveVideo",component:LiveVideoComponent},
  {path:"Demo",component:DemoComponent},
  {path:"ContactUs",component:ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeftnavRoutingModule { }
