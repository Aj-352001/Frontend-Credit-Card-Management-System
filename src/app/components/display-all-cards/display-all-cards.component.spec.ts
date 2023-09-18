import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAllCardsComponent } from './display-all-cards.component';

describe('DisplayAllCardsComponent', () => {
  let component: DisplayAllCardsComponent;
  let fixture: ComponentFixture<DisplayAllCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayAllCardsComponent]
    });
    fixture = TestBed.createComponent(DisplayAllCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
