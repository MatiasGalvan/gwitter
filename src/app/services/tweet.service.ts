import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TweetService {
  //tweetUrl = 'http://localhost:8080';
  constructor(
    private http: HttpClient,
  ) { }
/*
  getTimeline(): Observable<any[]> {
    const url = `${this.tweetUrl}/timeline`;
    return this.http.get<any[]>(url);
  }*/
}
