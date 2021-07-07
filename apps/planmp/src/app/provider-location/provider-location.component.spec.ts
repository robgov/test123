import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderLocationComponent } from './provider-location.component';

describe('ProviderLocationComponent', () => {
  let component: ProviderLocationComponent;
  let fixture: ComponentFixture<ProviderLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
