import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppUser } from 'src/app/class/AppUser';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {

  user: AppUser = {email:"",password:""};
  message:string="";
  errorMessage : string = "";
  userObj: any;
  constructor(private fb: FormBuilder, private router: Router, private userService:UserService) {}

  resetPasswordForm = this.fb.group({
    email: ['', 
    [Validators.required,
       Validators.email]],
    password: ['', Validators.required]
  });
  ngOnInit(): void { 
  }
  resetPassword(){
    this.userObj = this.resetPasswordForm.value;
    this.user.email = this.userObj.email
    this.user.password = this.userObj.password
    console.log(this.userObj);

    this.userService.resetPassword(this.user).subscribe ({
      next: (data)=>{
        console.log(data);
        this.message="Password updated successfully";
        this.router.navigate(['/login']);
      },
      error: (error)=>{
        console.log(error);
        this.errorMessage="Invalid credentials";
        this.message="";
      }
      
    })
  }

    get resetPasswordFormControl(){
      return this.resetPasswordForm.controls;
    }

}
