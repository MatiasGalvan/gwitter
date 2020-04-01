import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrendListComponent } from './components/trend-list/trend-list.component';
import { pathToFileURL } from 'url';

const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'trend-list' , component: TrendListComponent},
  //{ path: 'settings', component:  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
