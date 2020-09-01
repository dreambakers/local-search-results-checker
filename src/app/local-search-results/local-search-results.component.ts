import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-local-search-results',
  templateUrl: './local-search-results.component.html',
  styleUrls: ['./local-search-results.component.scss']
})
export class LocalSearchResultsComponent implements OnInit {

  pages = [
    1,2,3,4,5,6,7,8,9,10
  ];

  innerWidth;

  constructor() { }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }

  get cellWidth() {
    if (this.innerWidth <= 650) {
      console.log('yes')
      return 95;
    }

    return 180;
  }

}
