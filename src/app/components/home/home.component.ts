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

  constructor(
    //private gwitterService: GwitterService
  ) { }

  ngOnInit(): void {
    //this.getTimeline();
  }

  /* 
  getTimeline(): void {
    this.movieService.getMovies()
        .subscribe(movies => this.timeline= movies);
  }
  */
}
