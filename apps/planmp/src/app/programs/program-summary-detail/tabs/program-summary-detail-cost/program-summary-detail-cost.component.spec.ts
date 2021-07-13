import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramSummaryDetailCostComponent } from './program-summary-detail-cost.component';

describe('ProgramSummaryDetailCostComponent', () => {
  let component: ProgramSummaryDetailCostComponent;
  let fixture: ComponentFixture<ProgramSummaryDetailCostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramSummaryDetailCostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramSummaryDetailCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
