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
  
  getTimeline(amount: number){
    return this.http.get<any>(URL + TIMELINE + amount)
      .pipe(tap(data => JSON.parse(JSON.stringify(data))));
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return throwError(err.message);
  }
}
