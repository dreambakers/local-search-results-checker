import { Component, OnInit, HostListener } from '@angular/core';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
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
  searchQuery;

  constructor(
    private router: Router,
    public activatedRoute: ActivatedRoute
  ) {
    this.searchQuery = this.router.getCurrentNavigation().extras.state?.searchQuery;
    if (!this.searchQuery) {
      setTimeout(() => {
        this.navigateToHome();
      }, 1);
    }
  }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }

  navigateToHome() {
    this.router.navigateByUrl('/');
  }

  get cellWidth() {
    return this.innerWidth <= 650 ? 95 : 180;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }
}
