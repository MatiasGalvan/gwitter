import { Component, OnInit } from '@angular/core';

//import { Router } from '@angular/router';

import { ITweet } from '../../models/tweet';
import { IUser } from '../../models/user';
import { TwitterService } from '../../services/twitter.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  timeline: ITweet[] = [];
  notscrolly = true;
  allLoaded = false;
  initialTweets = 10; 
  index = 1; 
  count: number; 

  constructor(

    private twitterService: TwitterService,
    private spinner: NgxSpinnerService,
    //private router: Router
  ) { }

  
 /*
  handleSettingView(): void {
    this.router.navigate(['/settings']);

  }*/

  ngOnInit(): void {
    this.getTimeline(this.initialTweets);
    console.log(this.timeline);
    //this.addTweet();
  }

  getTimeline(amount): void {
    this.twitterService.getTimeline(amount)
      .subscribe(timeline => {
        timeline.forEach(tweet => {
          this.timeline.push(tweet);
        });
      });
  }

  onScroll() {
    this.spinner.show();
    if (this.count >= 200) this.allLoaded = true;

    if (this.notscrolly && this.allLoaded === false) {
      this.notscrolly = false;
      this.index++;
      this.count = this.initialTweets * this.index;
      this.addTweets(this.count);
      console.log(this.timeline);
    }
  }

  addTweets(count: number) {
    this.twitterService.getTimeline(count)
      .subscribe(tweets => {
      this.timeline = tweets;
      this.notscrolly = true;
      this.spinner.hide();
    });
  }
}
