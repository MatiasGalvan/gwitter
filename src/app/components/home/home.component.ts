import { Component, OnInit } from '@angular/core';
/*
import { Tweet } from '../../interfaces/IMovie';
import { GwitterService } from '../../services/movie.service';
*/

import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //timeline: any[];
  tweet: String;
  navLinks: any[];
  activeLinkIndex = -1;

  constructor(
  //  private tweetService: TweetService,
    private router: Router,
  ) {
    this.navLinks = [
      {
          label: 'Home',
          link: '/home',
          index: 0
      }, {
          label: 'Search',
          link: '/navbar',
          index: 1
      }, {
          label: 'Settings',
          link: '/settings',
          index: 2
      }, 
    ];
  }

  ngOnInit(): void {

    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });

    /*this.getTimeline();
    console.log(this.timeline);*/
    this.tweet="Lorem ipsum dolor";
  }

   
  /*getTimeline(): void {
    this.tweetService.getTimeline()
      .subscribe(timeline => this.timeline = timeline);
  }*/

}
