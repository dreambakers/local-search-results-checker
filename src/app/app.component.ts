import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'local-search-results-checker';

  searchEngine = 'google';

  isFocused(el) {
    return document.activeElement === el || el.value;
  }

  setFocus(el) {
    el.focus();
  }

  onBlur() {
  }

}