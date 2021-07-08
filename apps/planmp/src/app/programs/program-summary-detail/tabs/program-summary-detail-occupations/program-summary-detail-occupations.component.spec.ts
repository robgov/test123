import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramSummaryDetailOccupationsComponent } from './program-summary-detail-occupations.component';

describe('ProgramSummaryDetailOccupationsComponent', () => {
  let component: ProgramSummaryDetailOccupationsComponent;
  let fixture: ComponentFixture<ProgramSummaryDetailOccupationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramSummaryDetailOccupationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramSummaryDetailOccupationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
