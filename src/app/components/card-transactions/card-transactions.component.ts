import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TransactionDetails } from 'src/app/class/TransactionDetails';
import { BackendCreditcardService } from 'src/app/services/backend-creditcard.service';

@Component({
  selector: 'app-card-transactions',
  templateUrl: './card-transactions.component.html',
  styleUrls: ['./card-transactions.component.css']
})
export class CardTransactionsComponent {

  transactions:TransactionDetails[] = [];
  constructor(private creditCardService: BackendCreditcardService,
    private router:Router) {}

  ngOnInit(): void {
    this.loadAllTransactionsToComponents();
  }

  loadAllTransactionsToComponents(){
    this.creditCardService.getPaymentTransactions().subscribe(
      {
        next:(data)=>{
          console.log(data);
          this.transactions = data;
        },
        error:(error)=>{
          console.log(error);
        },
        complete:()=>{
          console.log("Loaded all data");
        }
      }
    );
  }

}
