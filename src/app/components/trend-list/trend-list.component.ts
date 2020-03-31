
import { ITrend } from './../../trend';
import { TwitterService } from 'src/app/services/twitter.service';
import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-trend-list',
  templateUrl: './trend-list.component.html',
  styleUrls: ['./trend-list.component.css']
})
export class TrendListComponent implements OnInit {

  selectedTrend: ITrend;
  errorMessage: any;
  trendFilter = '';
  trendListFiltered: ITrend[] = [];
  pageTitle = 'TrendList';



  constructor(private twitterService: TwitterService) {

  }

  ngOnInit(): void {
    console.log('In onInit' + this.trendListFiltered);
    this.getTrends();
  }
  /*onSelect(trend: ITrend) {
    this.selectedTrend = trend;

  }*/

  getTrends(): void {
    this.twitterService.getTrends()
      .subscribe(obj => {
        for (const i of obj) {
          console.log(i.trends);
          i.trends.forEach(element => {
            this.trendListFiltered.push(element);
          });

        }

      });

  }
}
