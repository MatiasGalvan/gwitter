import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { URL, SEARCH, TIMELINE } from './../endpoints';
import { ITweet } from '../models/tweet';
import { tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { IUser } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class TwitterService {

  constructor(
    private http: HttpClient,
  ) { }

  getTweetList(q: string) {
    return this.http.get<any>(URL + SEARCH + q)
      .pipe(tap(data => JSON.parse(JSON.stringify(data))));
  }

  getTimeline() {
    return this.http.get<any>(URL + TIMELINE)
      .pipe(tap(data => JSON.parse(JSON.stringify(data))));
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return throwError(err.message);
  }

  getTweet(tweet: any): ITweet {
    let res: ITweet = {
      created_at: this.getDate(tweet.created_at),
      id: tweet.id,
      id_str: tweet.id_str,
      text: tweet.text,
      source: tweet.source,
      truncated: tweet.truncated,

      in_reply_to_status_id: tweet.in_reply_to_status_id,
      in_reply_to_status_id_str: tweet.in_reply_to_status_id_str,
      in_reply_to_user_id: tweet.in_reply_to_user_id,
      in_reply_to_user_id_str: tweet.in_reply_to_user_id_str,
      in_reply_to_screen_name: tweet.in_reply_to_screen_name,

      retweeted: tweet.retweeted,
      retweet_count: tweet.retweet_count,
      favorited: tweet.favorited,
      favorite_count: tweet.favorite_count,

      user: this.getUser(tweet.user),
    };

    return res;
  }

  getUser(user: any): IUser {
    let res: IUser = {
      id: user.id,
      id_str: user.id_str,
      name: user.name,
      screen_name: user.screen_name,
      verified: user.verified,
      url: user.url,
      profile_image_url: user.profile_image_url,
    }
    return res;
  }

  getDate(date: any): string {
    let res: string;
    let aux: Date = new Date(date);
    let month = '';
    switch (aux.getMonth()) {
      case 0: month = 'Jan'; break;
      case 1: month = 'Feb'; break;
      case 2: month = 'Mar'; break;
      case 3: month = 'Apr'; break;
      case 4: month = 'May'; break;
      case 5: month = 'Jun'; break;
      case 6: month = 'Jul'; break;
      case 7: month = 'Aug'; break;
      case 8: month = 'Sep'; break;
      case 9: month = 'Oct'; break;
      case 10: month = 'Nov'; break;
      case 11: month = 'Dec'; break;
    }
    res = `${aux.getDate()} ${month}`;
    return res;
  }
}
