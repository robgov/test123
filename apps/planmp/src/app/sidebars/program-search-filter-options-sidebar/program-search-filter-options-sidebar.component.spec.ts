import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramSearchFilterOptionsSidebarComponent } from './program-search-filter-options-sidebar.component';

describe('ProgramSearchFilterOptionsSidebarComponent', () => {
  let component: ProgramSearchFilterOptionsSidebarComponent;
  let fixture: ComponentFixture<ProgramSearchFilterOptionsSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramSearchFilterOptionsSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramSearchFilterOptionsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
