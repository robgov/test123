import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypetextComponent } from './typetext.component';

describe('TypetextComponent', () => {
  let component: TypetextComponent;
  let fixture: ComponentFixture<TypetextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypetextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypetextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
