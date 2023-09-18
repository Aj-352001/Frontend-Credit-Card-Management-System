import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
import { AppUser } from 'src/app/class/AppUser';
import { Application } from 'src/app/class/Application';
import { BackendCreditcardService } from 'src/app/services/backend-creditcard.service';
import {of} from 'rxjs';

@Component({
  selector: 'app-create-application',
  templateUrl: './create-application.component.html',
  styleUrls: ['./create-application.component.css']
})
export class CreateApplicationComponent implements OnInit {
  message:string="";
  errorMessage:string="";
  submitted = false;
  application:Application = new Application(0,"","","",new Date(),0,"");
  userId:number=JSON.parse(String(localStorage.getItem("user"))).userId;
  appuser:AppUser=new AppUser;
  applicationObj :any;

  //userid:number =sessionStorage.getItem("id");

  constructor(private backendCreditcardService:BackendCreditcardService,
    private fb: FormBuilder){

      this.appuser.userId=this.userId;
    }
    minimumBirthdateValidator() {
      return (control) => {
        const selectedDate = new Date(control.value);
        const minBirthdate = new Date();
        minBirthdate.setFullYear(minBirthdate.getFullYear() - 18);
    
        if (isNaN(selectedDate.getTime()) || selectedDate > minBirthdate) {
          return of({ minimumBirthdate: true }); // Wrap the error object in an Observable
        }
        return of(null); // Wrap the success result in an Observable
      };
    }
  
  applicationForm = this.fb.group({
   
    name:['',
    [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20)
    ]],
    panNumber:['',
    [
      Validators.required,
      Validators.pattern(/^([A-Z]){5}([0-9]){4}([A-Z]){1}?$/)
    ]],
    aadharNumber:['',
    [
      Validators.required,
      Validators.pattern(/^[0-9]{12}$/)
    ]],
    dateOfBirth:[Date(),
      Validators.required,
      this.minimumBirthdateValidator()
    ],
    income:['',
    [
      Validators.required,
      Validators.min(200000)
    ]],
    status:['PROCESSING']
  })
  ngOnInit(): void {

  }
  createApplication(){
    if (this.applicationForm.valid){
    console.log(this.applicationForm.value)
    this.applicationObj = this.applicationForm.value;
    this.application.name= this.applicationObj.name
    this.application.aadharNumber = this.applicationObj.aadharNumber
    this.application.panNumber=this.applicationObj.panNumber
    this.application.dateOfBirth= this.applicationObj.dateOfBirth
    this.application.income = this.applicationObj.income
    this.application.status=this.applicationObj.status
    console.log(this.applicationObj);

    this.backendCreditcardService.postApplication(this.userId,this.application).subscribe({
      next:(data)=>{
        console.log(data);
        this.message="Application added. ";
        this.errorMessage="";
      },
      error:(error)=>{
        console.log(error);
        this.errorMessage="Application cannot be added. ";
        this.message="";
      }
    });
    this.application=new Application(0,"","","",new Date(),0,"");
  }}
  
  get applicationFormControl(){
    return this.applicationForm.controls;
  }

}
function registerFormControl() {
  throw new Error('Function not implemented.');
}

