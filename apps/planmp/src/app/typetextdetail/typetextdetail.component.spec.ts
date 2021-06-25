import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypetextdetailComponent } from './typetextdetail.component';

describe('TypetextdetailComponent', () => {
  let component: TypetextdetailComponent;
  let fixture: ComponentFixture<TypetextdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypetextdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypetextdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
