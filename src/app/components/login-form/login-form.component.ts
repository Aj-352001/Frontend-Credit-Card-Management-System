import { Component, OnInit, ɵpublishDefaultGlobalUtils} from '@angular/core';
import { AppUser} from 'src/app/class/AppUser';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent implements OnInit{
  user: AppUser = {userId:0,email:"", password:""};
  message:string="";
  errorMessage : string = "";
  userObj: any;
  constructor(private fb: FormBuilder, private router: Router, private userService:UserService) {}

  loginForm = this.fb.group({
    email: ['', 
    [Validators.required,
       Validators.email]],

    password: ['', Validators.required]
  });
  ngOnInit(): void { 
  }
  login(){
    this.userObj = this.loginForm.value;
    this.user.userId = this.userObj.userId
    this.user.email = this.userObj.email
    this.user.password = this.userObj.password
    console.log(this.userObj);

    this.userService.login(this.user).subscribe ({
      next: (data)=>{
        console.log(data);
        this.message="Logged in successfully";
        localStorage.setItem("user",JSON.stringify(data));
        this.router.navigate(['/home']);
      },
      error: (error)=>{
        console.log(error);
        this.errorMessage="Invalid credentials";
        this.message="";
      }
      
    })
  }

    get loginFormControl(){
      return this.loginForm.controls;
    }
  
}
