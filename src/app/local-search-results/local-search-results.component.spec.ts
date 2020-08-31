import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalSearchResultsComponent } from './local-search-results.component';

describe('LocalSearchResultsComponent', () => {
  let component: LocalSearchResultsComponent;
  let fixture: ComponentFixture<LocalSearchResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalSearchResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalSearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
