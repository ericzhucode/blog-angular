import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public currentUser: any;

  constructor(
  ) {

  }

  ngOnInit() {
    this.currentUser = {
      userName: 'eric'
    }
  }

  onMenuToggle() {
  }

  doLogout() {

  }
}
