import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramSummaryDetailOutcomesComponent } from './program-summary-detail-outcomes.component';

describe('ProgramSummaryDetailOutcomesComponent', () => {
  let component: ProgramSummaryDetailOutcomesComponent;
  let fixture: ComponentFixture<ProgramSummaryDetailOutcomesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramSummaryDetailOutcomesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramSummaryDetailOutcomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
