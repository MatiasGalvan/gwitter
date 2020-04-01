import { MatSidenavModule } from '@angular/material/sidenav';
import { TrendService } from 'src/app/services/trend.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TrendListComponent } from './components/trend-list/trend-list.component';
import { FormsModule } from '@angular/forms';
import { TrendpipePipe } from './pipes/trendpipe.pipe';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { TweetComponent } from './components/tweet/tweet.component';
import { NavtabComponent } from './components/navtab/navtab.component';
import { TweetDetailsComponent } from './components/tweet-details/tweet-details.component';
import { TwitterService } from 'src/app/services/twitter.service';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TrendListComponent,
    TrendpipePipe,
    TweetComponent,
    NavtabComponent,
    TweetDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
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
