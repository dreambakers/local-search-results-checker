import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { constants } from '../app.constants';
@Component({
  selector: 'app-local-search-form',
  templateUrl: './local-search-form.component.html',
  styleUrls: ['./local-search-form.component.scss']
})
export class LocalSearchFormComponent implements OnInit {
  searchForm: FormGroup;
  constants = constants;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.intializeForm();
  }

  intializeForm() {
    this.searchForm = this.formBuilder.group({
      term: ['', [Validators.required]],
      location: ['', [Validators.required]],
      country: ['US', [Validators.required]],
      langauge: ['en', [Validators.required]],
      searchEngine: ['google', [Validators.required]],
    });
    setTimeout(() => {
      this.attemptToRestore();
    }, 1);
  }

  attemptToRestore() {
    const savedQuery = JSON.parse(localStorage.getItem('query'));
    if (savedQuery) {
      const { term, location, country, langauge, searchEngine } = savedQuery;
      this.searchForm.controls['term'].setValue(term);
      this.searchForm.controls['location'].setValue(location);
      this.searchForm.controls['country'].setValue(country);
      this.searchForm.controls['langauge'].setValue(langauge);
      this.searchForm.controls['searchEngine'].setValue(searchEngine);
    }
  }

  isFocused(element) {
    return document.activeElement === element || element.value;
  }

  setFocus(element) {
    element.focus();
  }

  onBlur() {}

  onSearchEngineChange(selectedSearchEngine) {
    this.searchForm.controls['searchEngine'].setValue(selectedSearchEngine);
  }

  onCountryChange(value) {
    this.searchForm.controls['country'].setValue(value);
    this.searchForm.controls['langauge'].setValue(Object.keys(this.getSelectedCountryLangauges())[0]);
  }

  getSelectedCountryLangauges() {
    return this.constants.countries[this.searchForm.controls['country'].value].languages;
  }

  resetForm() {
    localStorage.clear();
    this.intializeForm();
  }

  onSubmit() {
    if (this.searchForm.invalid) {
      return;
    }
    localStorage.setItem('query', JSON.stringify(this.searchForm.value));
    this.router.navigateByUrl('/results', {
      state: {
        searchQuery: this.searchForm.value
      }
    });
  }
}
