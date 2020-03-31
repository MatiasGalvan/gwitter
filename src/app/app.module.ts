import {MatSidenavModule} from '@angular/material/sidenav';
import { TwitterService } from 'src/app/services/twitter.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TrendListComponent } from './components/trend-list/trend-list.component';
import { FormsModule } from '@angular/forms';
import { TrendpipePipe } from './pipes/trendpipe.pipe';

import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    TrendListComponent,
    TrendpipePipe,

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


  ],
  providers: [TwitterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
