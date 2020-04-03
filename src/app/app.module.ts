
/*------------------------Material Angular Components------------------------ */

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox'; 

/*------------------------Angular Modules-------------------------------------*/
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

/*------------------------Custom Components---------------------------------- */
import { TweetComponent } from './components/tweet/tweet.component';
import { NavtabComponent } from './components/navtab/navtab.component';
import { TweetDetailsComponent } from './components/tweet-details/tweet-details.component';
import { SettingsComponent } from './components/settings/settings.component';
import { HomeComponent } from './components/home/home.component';
import { TrendListComponent } from './components/trend-list/trend-list.component';

/*----------------------------Services----------------------------------------*/
import { TrendService } from './services/trend.service'
import { TwitterService } from 'src/app/services/twitter.service';
import { SearchComponent } from './components/search/search.component';

/*-----------------------------Others-----------------------------------------*/
import { AppComponent } from './app.component';
import { TweetpipePipe } from './pipes/tweetpipe.pipe';


import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TrendListComponent,
    TweetpipePipe,
    TweetComponent,
    NavtabComponent,
    TweetDetailsComponent,
    SearchComponent,
    SettingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    HttpClientModule,
    FormsModule,
    MatListModule,
    MatSidenavModule,
    MatTabsModule,
    MatInputModule,
    MatCardModule,
    HttpClientModule,
    InfiniteScrollModule,
    NgxSpinnerModule,
  ],
  providers: [
    TwitterService,
    TrendService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
