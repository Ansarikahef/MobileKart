import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
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

  {
    path:'about',component:AboutComponent
  },
  {path:'contact',component:ContactComponent},

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
