import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreditCard } from 'src/app/class/CreditCard';
import { BackendCreditcardService } from 'src/app/services/backend-creditcard.service';

@Component({
  selector: 'app-transaction-bycard',
  templateUrl: './transaction-bycard.component.html',
  styleUrls: ['./transaction-bycard.component.css']
})
export class TransactionBycardComponent implements OnInit {
  transactions: any[];
  creditCardINumber: string; 
  errorMessage: string;

  constructor(
    private backendCreditcardService: BackendCreditcardService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.creditCardINumber = params['creditCardNumber'];
      this.errorMessage = '';
    });
  }

  // Validation function for credit card number
  isInvalidCreditCardNumber(): boolean {
    return !/^\d{16}$/.test(this.creditCardINumber);
  }

  getTransactionsByCard(): void {
    if (this.isInvalidCreditCardNumber()) {
      this.errorMessage = 'Credit card number must be exactly 16 digits.';
      this.transactions = [];
      return;
    }

    this.backendCreditcardService.getPaymentTransactionsByCard(+this.creditCardINumber).subscribe(
      (data) => {
        this.transactions = data;
        console.log(data);
        this.errorMessage = '';
      }
    );
  }
}
