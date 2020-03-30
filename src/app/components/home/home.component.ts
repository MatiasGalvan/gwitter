import { Component, OnInit } from '@angular/core';
/*
import { Tweet } from '../../interfaces/IMovie';
import { GwitterService } from '../../services/movie.service';
*/

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //timeline: any[];
  tweet: String;

  constructor(
  //  private tweetService: TweetService,
  ) {}

  ngOnInit(): void {

    /*this.getTimeline();
    console.log(this.timeline);*/
    this.tweet="Lorem ipsum dolor";
  }

   
  /*getTimeline(): void {
    this.tweetService.getTimeline()
      .subscribe(timeline => this.timeline = timeline);
  }*/

}
