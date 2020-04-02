
import { TwitterService } from 'src/app/services/twitter.service';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ITweet } from 'src/app/models/tweet';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnChanges {
  tweetList: ITweet[] = [];
  keyword = '';
  @Input() keyTrend: string;

  constructor( private twitterService: TwitterService ) { }

  ngOnInit(): void {
    this.getTweetList(this.keyword);
  }

  ngOnChanges(changes: any) {
    console.log("Changes " + changes);
    if (changes.keyTrend.currentValue) {
      this.keyword = changes.keyTrend.currentValue;
      this.keyword = this.keyword.replace('#','');
      this.getTweetList(this.keyword);
    }
  }

  onClick() {
    this.getTweetList(this.keyword);
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







