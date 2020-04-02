
import { TwitterService } from 'src/app/services/twitter.service';
import { Component, OnInit } from '@angular/core';
import { ITweet } from 'src/app/models/tweet';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  tweetList: ITweet[] = [];
  keyword = '';
  constructor(private twitterService: TwitterService) { }

  ngOnInit(): void {
    this.getTweetList(this.keyword);
  }

  onClick() {
    console.log(this.keyword);
    console.log(this.tweetList);
    this.getTweetList(this.keyword);
    console.log(this.tweetList);
  }

  getTweetList(q: string): void {
    this.twitterService.getTweetList(q)
      .pipe(
        map(tweetList => tweetList.statuses)
      )
      .subscribe((tweetList: ITweet[]) => {
        this.tweetList = tweetList;
        console.log(this.tweetList);
      },
        (error) => {
          // error code
          console.log(error);
        });

  }
}







