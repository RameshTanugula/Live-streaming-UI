import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectdomainComponent } from './selectdomain.component';

describe('SelectdomainComponent', () => {
  let component: SelectdomainComponent;
  let fixture: ComponentFixture<SelectdomainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectdomainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectdomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
