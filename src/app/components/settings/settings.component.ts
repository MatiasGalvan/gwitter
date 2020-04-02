import { Component, OnInit } from '@angular/core';
import { IConfiguration } from "src/app/models/configuration";
import { TwitterService } from "src/app/services/twitter.service";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  settings: IConfiguration;

  constructor( private twitterService: TwitterService ) {}
  
  ngOnInit(): void {
    this.settings = this.twitterService.getSettings();
  }

}