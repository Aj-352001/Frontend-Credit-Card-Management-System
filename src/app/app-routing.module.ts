import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayAllCardsComponent } from './components/display-all-cards/display-all-cards.component';
import { HomeComponent } from './components/home/home.component';
import { CreateApplicationComponent } from './components/create-application/create-application.component';
import { DisplayApplicationComponent } from './components/display-application/display-application.component';
import { HelpComponent } from './components/help/help.component';
import { CardTransactionsComponent } from './components/card-transactions/card-transactions.component';
import { AddTransactionComponent } from './components/add-transaction/add-transaction.component';
import { BillPaymentComponent } from './components/bill-payment/bill-payment.component';
import { TransactionBycardComponent } from './components/transaction-bycard/transaction-bycard.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'cards', component:DisplayAllCardsComponent},
  {path:'user/application', component:CreateApplicationComponent},
  {path:'admin/applications', component:DisplayApplicationComponent},
  {path:'help', component:HelpComponent},
  {path:'transactions', component:CardTransactionsComponent},
  {path:'add-transaction', component:AddTransactionComponent},
  {path:'bill-payment', component:BillPaymentComponent},
  {path:'transactionByCard', component:TransactionBycardComponent},
  {path:'login', component:LoginFormComponent},
  {path:'register', component:RegisterComponent},
  {path:'reset-password', component:ResetPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
