import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionBycardComponent } from './transaction-bycard.component';

describe('TransactionBycardComponent', () => {
  let component: TransactionBycardComponent;
  let fixture: ComponentFixture<TransactionBycardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransactionBycardComponent]
    });
    fixture = TestBed.createComponent(TransactionBycardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
