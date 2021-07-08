import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramSummaryDetailComponent } from './program-summary-detail.component';

describe('ProgramSummaryDetailComponent', () => {
  let component: ProgramSummaryDetailComponent;
  let fixture: ComponentFixture<ProgramSummaryDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramSummaryDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramSummaryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
