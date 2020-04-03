import { Component, OnInit } from '@angular/core';
import { ITweet } from '../../models/tweet';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TwitterService } from 'src/app/services/twitter.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-tweet-details',
  templateUrl: './tweet-details.component.html',
  styleUrls: ['./tweet-details.component.css']
})
export class TweetDetailsComponent implements OnInit {

  public tweet : ITweet; 
 
  constructor(
    public ts: TwitterService,
    private route: ActivatedRoute,
    private location : Location
  ) { }

  ngOnInit(): void {
    console.log('In onInit' + this.tweet);
    this.getTweet();
  }

  getTweet() : void {
    let id = this.route.snapshot.paramMap.get('id_str');
    this.ts.getIdTweet(id)
     //.subscribe(tweet => this.tweet = tweet);
     .subscribe((tweet)=>{this.tweet = tweet}, (error) => {console.log(error);});
  }

  goBack(): void {
    this.location.back();
  }

}
