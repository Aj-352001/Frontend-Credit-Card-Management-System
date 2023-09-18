import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Application } from '../class/Application';

@Injectable({
  providedIn: 'root'
})
export class BackendCreditcardService {

  constructor(private httpClient:HttpClient) { }
  
  getAllCards(userId:number):Observable<any>{
    return this.httpClient.get("http://localhost:8090/api/v1/cards/"+userId, {responseType:"json"});
  }
  
  postApplication(userId:number,newApplication:Application):Observable<any>{
    return this.httpClient.post("http://localhost:8090/api/v1/application/"+ userId, newApplication ,{responseType:'text'});
  }

  deleteApplication(userId:number,applicationId:number):Observable<any>{
    return this.httpClient.delete("http://localhost:8090/api/v1/application/"+userId+"/"+applicationId ,{responseType:'text'})
  }

  displayAllApplications():Observable<any>{
    return this.httpClient.get("http://localhost:8090/api/v1/applications/", {responseType:"json"});
  }

  deleteApplicationById(applicationId:number):Observable<any>{
    return this.httpClient.delete("http://localhost:8090/api/v1/delapplication/"+ applicationId ,{responseType:"json"});
  }

  createCreditCard(applicationId:number):Observable<any>{
    return this.httpClient.post("http://localhost:8090/api/v1/creditcard/2/" +applicationId, {responeType:"json"});
  }
  getPaymentTransactions(): Observable<any> {
    return this.httpClient.get("http://localhost:8090/transactions/" , {responseType:"json"});
  }

  addPaymentTransaction(newPaymentTransactions: any, creditCardINumber:number): Observable<any>{
    return this.httpClient.post("http://localhost:8090/transaction/" + creditCardINumber, newPaymentTransactions)
  }
  
  getPaymentTransactionsByCard(creditCardINumber:number): Observable<any> {
    return this.httpClient.get("http://localhost:8090/transactions/"+ creditCardINumber, {responseType:"json"});
  }

}
