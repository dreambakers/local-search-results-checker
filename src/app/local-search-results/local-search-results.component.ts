import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { constants } from '../app.constants';

@Component({
  selector: 'app-local-search-results',
  templateUrl: './local-search-results.component.html',
  styleUrls: ['./local-search-results.component.scss']
})
export class LocalSearchResultsComponent implements OnInit {
  pages = [];
  innerWidth;
  searchQuery;
  constants = constants;

  constructor(
    private router: Router,
    public activatedRoute: ActivatedRoute
  ) {
    this.searchQuery = this.router.getCurrentNavigation().extras.state?.searchQuery;
    if (!this.searchQuery) {
      setTimeout(() => {
        this.navigateToHome();
      }, 1);
    } else {
      const { term, location, country, langauge, searchEngine } = this.searchQuery;
      const baseUrl = constants.countries[country].domain;
      for (let i = 0, j = 0; i < 10; i++, j += 10) {
        let pageUrl = `https://${baseUrl}/search?q=${encodeURI(term)}&gl=${country}&hl=${langauge}&gws_rd=cr&pws=0&uule=${this.uule(location)}`;
        pageUrl += j > 0 ? `&start=${j}` : '';
        this.pages.push(pageUrl);
      }
    }
  }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }

  navigateToHome() {
    this.router.navigateByUrl('/');
  }

  uuleSecret(length){
    const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const alphabetsLower = alphabets.toLowerCase();
    const digits = '0123456789';
    const secretList = [
      ...alphabets.split(''),
      ...alphabetsLower.split(''),
      ...digits.split(''),
      ...["-", "_"]
    ];
    return secretList[length % secretList.length];
  }

  uule(city) {
    const secret = this.uuleSecret(city.length);
    const hashed = btoa(city);
    return `w+CAIQICI${secret}${hashed}`.replace(/=/g, '');
  }

  get cellWidth() {
    return this.innerWidth <= 650 ? 95 : 180;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }
}
