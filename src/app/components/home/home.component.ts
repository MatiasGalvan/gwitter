import { Component, OnInit } from '@angular/core';
//import { Router } from '@angular/router';

import { ITweet } from '../../models/tweet';
import { IUser } from '../../models/user';
import { TwitterService } from '../../services/twitter.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  timeline: ITweet[] = [];

  constructor(

    private twitterService: TwitterService,
    //private router: Router
  ) { }

  
 /*
  handleSettingView(): void {
    this.router.navigate(['/settings']);

  }*/

  ngOnInit(): void {
    this.getTimeline();
    console.log(this.timeline);
  }

  getTimeline(): void {
    this.twitterService.getTimeline()
      .subscribe(timeline => {
        timeline.forEach(tweet => {
          this.timeline.push(tweet);
        });
      });
  }
}
