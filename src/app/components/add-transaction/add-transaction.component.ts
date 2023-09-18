import { Component } from '@angular/core';
import { BillingCycle } from 'src/app/class/BillingCycle';
import { CardType } from 'src/app/class/CardType';
import { CreditCard } from 'src/app/class/CreditCard';
import { TransactionDetails } from 'src/app/class/TransactionDetails';
import { BackendCreditcardService } from 'src/app/services/backend-creditcard.service';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent {
  message:string = "";
  error:string= "";

  Transaction:TransactionDetails=new TransactionDetails(0,new Date(),"",0);
  //CreditCard: CreditCard = new CreditCard(0,new Date,"",new Date,0,0,0,0,0,0,0,CardType.BASIC,new BillingCycle);
  //creditCardINumber: number = 1234567890123456;

  creditCard:CreditCard = new CreditCard();
  
  constructor(private backendCreditcardService:BackendCreditcardService){
    this.creditCard.creditCardINumber= 0;
  }

  addTransaction(){
    this.backendCreditcardService.addPaymentTransaction (this.Transaction,this.creditCard.creditCardINumber).subscribe({
      next:(data)=>{console.log(data);
      this.message = "Transaction added"
      },  
  
      error:(error)=>{console.log(error);
      this.error = "Transaction could not be added"
      }   
     });
  
     this.Transaction = new TransactionDetails(0,new Date(),"",0);
  }


  ngOnInit(): void {
      
  }
}
