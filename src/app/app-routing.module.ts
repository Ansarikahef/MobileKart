import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElectronicsComponent } from './electronics/electronics.component';
import { HomeComponent } from './home/home.component';
import { MobileComponent } from './mobile/mobile.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'mobile',component:MobileComponent
  },
  {
    path:'electronics',component:ElectronicsComponent
  },

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
