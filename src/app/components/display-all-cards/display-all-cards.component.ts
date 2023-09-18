import { Component, OnInit } from '@angular/core';
import { Application } from 'src/app/class/Application';
import { CreditCard } from 'src/app/class/CreditCard';
import { BackendCreditcardService } from 'src/app/services/backend-creditcard.service';

@Component({
  selector: 'app-display-all-cards',
  templateUrl: './display-all-cards.component.html',
  styleUrls: ['./display-all-cards.component.css']
})
export class DisplayAllCardsComponent implements OnInit {

  message:string="";
  errorMessage:string="";
  creditcards:CreditCard[]=[];
  userId:number=JSON.parse(String(localStorage.getItem("user"))).userId;

  constructor(private backendCreditCardService:BackendCreditcardService){
  

  }

  ngOnInit(): void {
    this.loadAllCardsToComponent();
  }

  loadAllCardsToComponent(){
    console.log(this.creditcards)
    this.backendCreditCardService.getAllCards(this.userId).subscribe({
      next:(data)=>{
        console.log(data);
        this.creditcards=data;
      },
      error:(error)=>{
        console.log(error);
      },
      complete:()=>{
        console.log("loaded data");
      }
    })
  }

}
