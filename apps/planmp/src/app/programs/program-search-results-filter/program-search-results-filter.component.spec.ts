import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramSearchResultsFilterComponent } from './program-search-results-filter.component';

describe('ProgramSearchResultsFilterComponent', () => {
  let component: ProgramSearchResultsFilterComponent;
  let fixture: ComponentFixture<ProgramSearchResultsFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramSearchResultsFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramSearchResultsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
