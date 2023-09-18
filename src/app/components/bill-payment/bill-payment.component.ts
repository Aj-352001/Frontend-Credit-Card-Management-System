import { Component,HostListener, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrderServiceService } from 'src/app/services/order-service.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SuccessDialogComponent } from 'src/app/success-dialog/success-dialog.component';

declare var Razorpay:any;

@Component({
  selector: 'app-bill-payment',
  templateUrl: './bill-payment.component.html',
  styleUrls: ['./bill-payment.component.css']
})
export class BillPaymentComponent implements OnInit{
  [x: string]: any;

  title = 'payment-gateway';

  form: any = {}; 
  constructor(private http: HttpClient,
    private orderService:OrderServiceService,private dialog: MatDialog,private router: Router) {
  }

  ngOnInit() {

  }
  sayHello() {
    alert("Hello DK");
  }

  paymentId?: string;
  error?: string;

  options = {
    "key": "",
    "amount": "", 
    "name": "Coding World",
    "description": "Web Development",
    "image": "https://www.javachinna.com/wp-content/uploads/2020/02/android-chrome-512x512-1.png",
    "order_id":"",
    "handler": function (response: any){
      var event = new CustomEvent("payment.success", 
        {
          detail: response,
          bubbles: true,
          cancelable: true
        }
      );	  
      window.dispatchEvent(event);
    }
    ,
    "prefill": {
    "name": "",
    "email": "",
    "contact": ""
    },
    "notes": {
    "address": ""
    },
    "theme": {
    "color": "#3399cc"
    }
    };

    onSubmit(): void {

      if (!/^\d{16}$/.test(this.form.creditCardNumber)) {
        this.error = 'Credit Card Number must be 16 digits.';
        return;
      }
  
      // Validate the name (must be between 3 and 20 characters)
      if (this.form.name.length < 3 || this.form.name.length > 20) {
        this.error = 'Name must be between 3 and 20 characters.';
        return;
      }
  
      // Validate the email (basic email format check)
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (!emailPattern.test(this.form.email)) {
        this.error = 'Invalid email format.';
        return;
      }
      if (this.form.amount <= 0) {
        this.error = 'Amount must be greater than 0.';
        return;
      }
  
      this.paymentId = ''; 
      this.error = ''; 
      this.orderService.createOrder(this.form).subscribe(
      data => {
        this.options.key = data.secretId;
        this.options.order_id = data.razorpayOrderId;
        this.options.amount = data.applicationFee; //paise
        this.options.prefill.name = "Coding World";
        this.options.prefill.email = "codingworld@gmail.com";
        this.options.prefill.contact = "9999999999";

        
        
        if(data.pgName ==='razor2') {
          this.options.image="";
          var rzp1 = new Razorpay(this.options);
          rzp1.open();
        } else {
          var rzp2 = new Razorpay(this.options);
          rzp2.open();
        }
              
        rzp1.on('payment.failed',  (response: { error: { code: any; description: any; source: any; step: any; reason: any; metadata: { order_id: any; payment_id: any; }; }; }) =>{    
          // Todo - store this information in the server
          console.log(response);
          console.log(response.error.code);    
          console.log(response.error.description);    
          console.log(response.error.source);    
          console.log(response.error.step);    
          console.log(response.error.reason);    
          console.log(response.error.metadata.order_id);    
          console.log(response.error.metadata.payment_id);
          this.error = response.error.reason;
        }
        );
      }
      ,
      // err => {
      //   this.error = err.error.message;
      // }
      );
    }
    @HostListener('window:payment.success', ['$event']) 
    onPaymentSuccess(event: { detail: any; }): void { 
      const paymentResponse={
        status: 'success',
        order:this.paymentId = this.options.order_id

      }; 
      console.log(event.detail);

      if (paymentResponse.status === 'success') {
        // Open the success dialog
        const dialogRef = this.dialog.open(SuccessDialogComponent, {
          data: { paymentId: paymentResponse.order}
        });
        // After the dialog is closed, navigate to the home page
      dialogRef.afterClosed().subscribe(() => {
      this.router.navigate(['/home']); // Replace 'home' with your actual home route
    });
    }else{
      console.log("payment failed")
    }
  }  
}

