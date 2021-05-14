import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentSashComponent } from './environment-sash.component';

describe('EnvironmentSashComponent', () => {
  let component: EnvironmentSashComponent;
  let fixture: ComponentFixture<EnvironmentSashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvironmentSashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvironmentSashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
