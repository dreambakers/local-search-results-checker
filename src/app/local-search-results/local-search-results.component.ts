import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local-search-results',
  templateUrl: './local-search-results.component.html',
  styleUrls: ['./local-search-results.component.scss']
})
export class LocalSearchResultsComponent implements OnInit {

  pages = [
    1,2,3,4,5,6,7,8,9,10
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
