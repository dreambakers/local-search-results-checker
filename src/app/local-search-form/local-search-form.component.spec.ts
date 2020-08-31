import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalSearchFormComponent } from './local-search-form.component';

describe('LocalSearchFormComponent', () => {
  let component: LocalSearchFormComponent;
  let fixture: ComponentFixture<LocalSearchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalSearchFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
