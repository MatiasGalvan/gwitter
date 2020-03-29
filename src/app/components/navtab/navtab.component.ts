import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navtab',
  templateUrl: './navtab.component.html',
  styleUrls: ['./navtab.component.css']
})
export class NavtabComponent implements OnInit {

  navLinks: any[];
  activeLinkIndex = -1;

  constructor(
    private router: Router,
  ) {
    this.navLinks = [
      {
          label: 'Home',
          link: '/home',
          index: 0
      }, {
          label: 'Search',
          link: '/',
          index: 1
      }, {
          label: 'Settings',
          link: '/settings',
          index: 2
      }, 
    ];
  }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }

}
