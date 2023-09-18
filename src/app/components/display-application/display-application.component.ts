import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppUser } from 'src/app/class/AppUser';
import { Application } from 'src/app/class/Application';
import { BackendCreditcardService } from 'src/app/services/backend-creditcard.service';

@Component({
  selector: 'app-display-application',
  templateUrl: './display-application.component.html',
  styleUrls: ['./display-application.component.css']
})
export class DisplayApplicationComponent implements OnInit {

  message:string="";
  errorMessage:string="";
  applications:Application[]=[];
  application:Application = new Application(0,"","","",new Date(),0,"");
  userId:number;
  isApproved:boolean=false;
  isUpdate:boolean=false;
  isUpdateSuccess=false;
  isDetails=false;
  appuser:AppUser=new AppUser;

  
  constructor(private backendCreditcardService:BackendCreditcardService,
     private router:Router){}

  ngOnInit(): void {
    this.loadAllApplicationToComponent();
    this.appuser.userId=2;
  }

  loadAllApplicationToComponent(){
    this.backendCreditcardService.displayAllApplications().subscribe({
      next:(data)=>{
        console.log(data);
        this.applications=data;
      },
      error:(error)=>{
        console.log(error);
      },
      complete:()=>{
        console.log("loaded data");
      }
    });
  }

  deleteApplication(applicationId:number){
    console.log("delete method: " + applicationId);
    this.backendCreditcardService.deleteApplication(this.appuser.userId,applicationId).subscribe({
      next:(data)=>{console.log(data); 
        this.loadAllApplicationToComponent();
        this.message="application deleted";
      },
      error:(error)=>{console.log(error);},
      complete:()=>{console.log("application loaded data");}
    });
  // this. products= this.productService.deleteProductById(deleteID);
  }

  createCreditCard(applicationId:number){
    console.log("credit card is assigned succesfully for application Id: "+ applicationId );
    this.backendCreditcardService.createCreditCard(applicationId).subscribe({
      next:(data)=>{
        console.log(data);
        this.message="credit card created.";
        this.errorMessage="";
      },
      error:(error)=>{
        console.log(error);
        this.errorMessage="credit card cannot be added. ";
        this.message="";
      }
    });
  }

}
