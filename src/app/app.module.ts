import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayAllCardsComponent } from './components/display-all-cards/display-all-cards.component';
import { HomeComponent } from './components/home/home.component';
import { CreateApplicationComponent } from './components/create-application/create-application.component';
import { DisplayApplicationComponent } from './components/display-application/display-application.component';
import { HelpComponent } from './components/help/help.component';
import { AddTransactionComponent } from './components/add-transaction/add-transaction.component';
import { CardTransactionsComponent } from './components/card-transactions/card-transactions.component';
import { BillPaymentComponent } from './components/bill-payment/bill-payment.component';
import { SuccessDialogComponent } from './success-dialog/success-dialog.component';
import { TransactionBycardComponent } from './components/transaction-bycard/transaction-bycard.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayAllCardsComponent,
    HomeComponent,
    CreateApplicationComponent,
    DisplayApplicationComponent,
    HelpComponent,
    AddTransactionComponent,
    CardTransactionsComponent,
    BillPaymentComponent,
    SuccessDialogComponent,
    TransactionBycardComponent,
    LoginFormComponent,
    RegisterComponent,
    ResetPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
