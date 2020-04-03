import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrendListComponent } from './components/trend-list/trend-list.component';
import { pathToFileURL } from 'url';
import { TweetDetailsComponent } from './components/tweet-details/tweet-details.component';
import { SettingsComponent } from './components/settings/settings.component';

const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'trend-list' , component: TrendListComponent},
  { path: 'tweet-details/:id_str' , component: TweetDetailsComponent },
  { path: 'settings', component: SettingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
