import { Component, OnInit, Input } from '@angular/core';
import { ITweet } from 'src/app/models/tweet';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {

  @Input () tweet: ITweet;

  ngOnInit(): void {
  }

}
