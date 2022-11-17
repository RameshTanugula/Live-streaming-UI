import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosedomainComponent } from './choosedomain.component';

describe('ChoosedomainComponent', () => {
  let component: ChoosedomainComponent;
  let fixture: ComponentFixture<ChoosedomainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoosedomainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoosedomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
