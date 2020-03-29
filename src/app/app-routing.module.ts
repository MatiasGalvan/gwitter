import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TweetComponent } from './components/tweet/tweet.component';
import { pathToFileURL } from 'url';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  
  { path: 'navbar', component: NavbarComponent },//Son de prueba para el tab nav
  { path: 'settings', component: TweetComponent }//---
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
