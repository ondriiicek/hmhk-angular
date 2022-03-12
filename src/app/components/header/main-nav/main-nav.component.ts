import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {
  showMatches : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onHoverMatches(){
    this.showMatches = !this.showMatches;
  }
}
