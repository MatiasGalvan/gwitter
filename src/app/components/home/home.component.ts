import { Component, OnInit } from '@angular/core';
/*
import { Tweet } from '../../interfaces/IMovie';
import { GwitterService } from '../../services/movie.service';
*/

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //timeline: Tweet[];
  tweet: String;

  constructor(
    //private gwitterService: GwitterService
  ) { }

  ngOnInit(): void {
    //this.getTimeline();
    this.tweet="Lorem ipsum dolor"
  }

  /* 
  getTimeline(): void {
    this.gwitterService.getMovies()
        .subscribe(movies => this.timeline= movies);
  }
  */
}
