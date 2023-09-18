import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { AppUser } from 'src/app/class/AppUser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  user:AppUser = {userId:0, email:"", password:""};
  message:string="";
  errorMessage : string = "";
  userObj: any;
  constructor(private userService : UserService, private router : Router, private fb: FormBuilder) { }

  ngOnInit(): void {}
  registerForm = this.fb.group({

    name: ['',[Validators.required]],
    email: ['', 
    [Validators.required,
       Validators.email]],

    password: ['', Validators.required]
  });

  register(){
    this.userObj = this.registerForm.value;
    this.user.userId=this.userObj.userId
    this.user.email = this.userObj.email
    this.user.password = this.userObj.password
    console.log(this.userObj);
    this.userService.registerUser(this.user).subscribe({
      next: (data)=>{
        //console.log(data);
        this.message="User registered successfully."
        this.router.navigate(['/login']);
      },
      error: (error)=>{
        console.log(error);
      }
    }) 

  }
  get registerFormControl(){
    return this.registerForm.controls;
  }
}
