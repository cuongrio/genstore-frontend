import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './full.component.html'
})
export class FullComponent implements OnInit {
  public isHome: boolean = false;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.isHome = this.router.url.indexOf('/home') > -1;
  }
}
