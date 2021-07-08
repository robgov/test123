import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramSummaryDetailAdmissionComponent } from './program-summary-detail-admission.component';

describe('ProgramSummaryDetailAdmissionComponent', () => {
  let component: ProgramSummaryDetailAdmissionComponent;
  let fixture: ComponentFixture<ProgramSummaryDetailAdmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramSummaryDetailAdmissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramSummaryDetailAdmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
