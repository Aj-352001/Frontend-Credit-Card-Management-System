import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTransactionsComponent } from './card-transactions.component';

describe('CardTransactionsComponent', () => {
  let component: CardTransactionsComponent;
  let fixture: ComponentFixture<CardTransactionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardTransactionsComponent]
    });
    fixture = TestBed.createComponent(CardTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
