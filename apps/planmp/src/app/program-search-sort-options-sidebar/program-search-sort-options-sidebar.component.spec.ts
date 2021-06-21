import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramSearchSortOptionsSidebarComponent } from './program-search-sort-options-sidebar.component';

describe('ProgramSearchSortOptionsComponent', () => {
  let component: ProgramSearchSortOptionsSidebarComponent;
  let fixture: ComponentFixture<ProgramSearchSortOptionsSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramSearchSortOptionsSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramSearchSortOptionsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
