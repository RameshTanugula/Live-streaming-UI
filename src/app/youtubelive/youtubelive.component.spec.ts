import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeliveComponent } from './youtubelive.component';

describe('YoutubeliveComponent', () => {
  let component: YoutubeliveComponent;
  let fixture: ComponentFixture<YoutubeliveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoutubeliveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeliveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
