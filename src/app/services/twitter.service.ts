import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { URL, SEARCH, TIMELINE } from './../endpoints';
import { ITweet } from '../models/tweet';
import { map, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { IUser } from '../models/user';
import { IConfiguration } from '../models/configuration';

@Injectable({
  providedIn: 'root'
})
export class TwitterService {

  settings: IConfiguration;

  constructor( private http: HttpClient ) {
    this.settings = {
      hushNotVerifiedAccount : false,
      hushNotFollowed : false,
      hushDefaultProfile : false,
      hushTweetsWithLink : false,
      hushTextTruncated : false,
    };
  }

  getTweetList(q: string) {
    return this.http.get<any>(URL + SEARCH + q)
      .pipe(tap(data => JSON.parse(JSON.stringify(data))));
  }
  
  getTimeline(amount: number){
    return this.http.get<any>(URL + TIMELINE + amount)
      .pipe(
        map(data => (data = this.filterTimeline(data)))
      );
  }

  filterTimeline(tweets: any) {
    const timelineFiltered = tweets.filter(element =>
      this.filterByConfiguration(element)
    );
    return timelineFiltered;
  }

  filterByConfiguration(tweet: any) {
    let res: boolean = true;

    if(this.settings.hushNotVerifiedAccount && !tweet.user.verified){
      res = false;
    }
    else if(this.settings.hushNotFollowed && !tweet.user.following){
      res = false;
    }
    else{
      if(this.settings.hushDefaultProfile && tweet.user.default_profile)
        res = false;
      else if(this.settings.hushTweetsWithLink && tweet.entities.urls != 0)
        res = false;
      else if(this.settings.hushTextTruncated && tweet.truncated)
        res = false;
    }

    return res;
  }

  getSettings() : IConfiguration{
    return this.settings;
  }

  setSettings(set: IConfiguration){
    this.settings = set;
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return throwError(err.message);
  }
}
