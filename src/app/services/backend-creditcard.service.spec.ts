import { TestBed } from '@angular/core/testing';

import { BackendCreditcardService } from './backend-creditcard.service';

describe('BackendCreditcardService', () => {
  let service: BackendCreditcardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackendCreditcardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
