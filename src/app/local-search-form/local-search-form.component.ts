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

  onSubmit() {
    if (this.searchForm.invalid) {
      return;
    }
    this.router.navigateByUrl('/results', {
      state: {
        searchQuery: this.searchForm.value
      }
    });
  }
}
