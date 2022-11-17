import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutreviewComponent } from './checkoutreview.component';

describe('CheckoutreviewComponent', () => {
  let component: CheckoutreviewComponent;
  let fixture: ComponentFixture<CheckoutreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
