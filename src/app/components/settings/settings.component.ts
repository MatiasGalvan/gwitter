import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  settings: any

  constructor() {
    this.settings = [
      { "setting": 'People who have not verified the account' },
      { "setting": 'People who do not follow' },
      { "setting": 'People who have default profile information' },
      { "setting": 'Tweets that contains a link' },
      { "setting": 'Tweets that has text truncated'}
    ]
  }

  ngOnInit(): void {
  }

}
