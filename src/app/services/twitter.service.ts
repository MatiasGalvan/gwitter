import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { URL, TIMELINE, TWEET } from './../endpoints';
import { ITweet } from '../models/tweet';
import { tap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TwitterService {

  tweet : ITweet;
  private url = URL + TWEET; 

  constructor(
    private http: HttpClient,
  ) { }

  getTimeline(amount: number){
    return this.http.get<any>(URL+TIMELINE+amount)
      .pipe(tap(data => JSON.parse(JSON.stringify(data))));
  }

  getIdTweet (searchId : string): Observable<any> {
    return this.http.get<any>(this.url+searchId)
    .pipe(tap(data => JSON.parse(JSON.stringify(data))));
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return throwError(err.message);
  }
}