
import { ITrend } from './../trend';
import { URL, TRENDS, SEARCH } from './../endpoints';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { tap } from 'rxjs/operators';
import { throwError } from 'rxjs';




@Injectable({
  providedIn: 'root'
})

export class TwitterService {

  trends: ITrend[];
  private url = URL + TRENDS;
  constructor(private http: HttpClient) { }


  getTrends() {

    return this.http.get<any>(this.url)
      .pipe(tap(data => JSON.parse(JSON.stringify(data))));
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return throwError(err.message);
  }
}




