import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayApplicationComponent } from './display-application.component';

describe('DisplayApplicationComponent', () => {
  let component: DisplayApplicationComponent;
  let fixture: ComponentFixture<DisplayApplicationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayApplicationComponent]
    });
    fixture = TestBed.createComponent(DisplayApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
