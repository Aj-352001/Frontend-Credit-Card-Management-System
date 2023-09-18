import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  constructor(private http: HttpClient) { 

  }

  createOrder(order: { name: any; email: any; creditCardNumber: number; amount: any; }): Observable<any> {
		return this.http.post("http://localhost:8090/api/v1/order", {
		customerName: order.name,
		email: order.email,
		creditCardNumber: order.creditCardNumber,
		amount: order.amount
		}, httpOptions);
	}
	
}
