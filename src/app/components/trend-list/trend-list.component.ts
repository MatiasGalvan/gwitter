

import { TrendService } from 'src/app/services/trend.service';
import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { ITrend } from 'src/app/models/trend';


@Component({
  selector: 'app-trend-list',
  templateUrl: './trend-list.component.html',
  styleUrls: ['./trend-list.component.css']
})
export class TrendListComponent implements OnInit {

  selectedTrend: ITrend;
  errorMessage: any;
  trendListFiltered: ITrend[] = [];


  constructor(private trendService: TrendService) {

  }

  ngOnInit(): void {
    console.log('In onInit' + this.trendListFiltered);
    this.getTrends();
  }

  getTrends(): void {
    this.trendService.getTrends()
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
