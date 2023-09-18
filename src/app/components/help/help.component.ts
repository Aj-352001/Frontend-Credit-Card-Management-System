import { Component } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent {

  helpItems: { question: string, answer: string }[] = [
    {
      question: 'How do I apply for a credit card?',
      answer: 'You can apply for a credit card by filling out an online application form on our website by providing few details required.'
    },
    {
      question: 'What documents do I need to apply for a credit card?',
      answer: 'To apply for a credit card, you typically need to provide identification documents such as your PAN card,Aadhar Card, proof of income, and sometimes additional financial documents. Our app will specify the exact requirements during the application process.'
    },
    {
      question: ' How long does it take to get approved for a credit card?',
      answer: 'The approval process can vary, but we strive to provide quick decisions. In many cases, you can receive an instant approval decision through our app. For others, it may take a few business days for a thorough review.'
    },
    {
      question: 'Can I check my credit card balance and transactions through the app?',
      answer: 'Yes, you can easily view your credit card balance, recent transactions, and payment history through our app. These details are updated in real-time for your convenience.'
    },
    {
      question: 'What is the credit limit on my card?',
      answer: 'Your credit limit depends on your creditworthiness and the type of card you have. Though it can vary from a range of 2,00,000 INR to 5,00,000 INR.'
    },
    {
      question: 'Can I pay my credit card bill through the app?',
      answer: 'Yes, you can make credit card payments conveniently through the app. You can choose to make one-time payments or set up automatic payments to ensure your bills are paid on time.'
    },
  ];

  toggleAnswer(helpItem: any) {
    helpItem.isOpen = !helpItem.isOpen;
  }
}
