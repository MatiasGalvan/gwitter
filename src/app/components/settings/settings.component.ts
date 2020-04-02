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
      { "setting": 'People who have not verified the account', id: 1, "value": false },
      { "setting": 'People who do not follow', id: 2, "value": false },
      { "setting": 'People who have default profile information', id: 3, "value": false },
      { "setting": 'Tweets that contains a link', id: 4, "value": false },
      { "setting": 'Tweets that has text truncated', id: 5, "value": false }
    ]
  }

  handleCheck(i) {
    this.settings[i].value = !this.settings[i].value
    console.log(this.settings[i]);
    localStorage.setItem("settings", JSON.stringify(this.settings))

  }

  ngOnInit(): void {
    localStorage.setItem("settings", JSON.stringify(this.settings));
  }



}