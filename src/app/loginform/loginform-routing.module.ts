import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterformComponent } from './registerform/registerform/registerform.component';

const routes: Routes = [
  {path:"registerform",component:RegisterformComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginformRoutingModule { }
