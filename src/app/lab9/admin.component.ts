// login.component.ts
import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  template: `
  <div class="wrapper " style="margin-left: 40%;margin-top:7%; margin-bottom:3%;">
  <div class="title">
     Login Form - Admin
  </div>
  <form (ngSubmit)="submit()" #myForm="ngForm">
     <div class="field">
        <input type="text" [(ngModel)]="email" name="email" id="email" required>
        <label>Email Address</label>
     </div>
     <div class="field">
        <input type="password" [(ngModel)]="password" minlength="8" name="password" id="pass" autoComplete="on" required>
        <label>Password</label>
     </div>
     <div class="content">
        <div class="checkbox" >
           <input type="checkbox" id="remember-me" style="margin-left: -110%;">
           <label for="remember-me">Remember me</label>
        </div>
        <div class="pass-link">
           <a href="#">Forgot password?</a>
        </div>
     </div>
     <div class="field">
        <input type="submit" [disabled]="myForm.form.invalid" value="Login">
     </div>
     <div class="signup-link">
        Not a member? <a href="#">Signup now</a>
     </div>
  </form>
  <div *ngIf="message" class="text-center mt-3">{{ message }}</div>

  `,
  styles: [`@import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap');
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
  html,body{
    display: grid;
    height: 100%;
    width: 100%;
    place-items: center;
    background: #f2f2f2;
    /* background: linear-gradient(-135deg, #c850c0, #4158d0); */
  }
  ::selection{
    background: #4158d0;
    color: #fff;
  }
  .wrapper{
    width: 380px;
    background: #fff;
    border-radius: 15px;
    box-shadow: 0px 15px 20px rgba(0,0,0,0.1);
  }
  .wrapper .title{
    font-size: 35px;
    font-weight: 600;
    text-align: center;
    line-height: 100px;
    color: #fff;
    user-select: none;
    border-radius: 15px 15px 0 0;
    background: linear-gradient(-135deg, #c850c0, #4158d0);
  }
  .wrapper form{
    padding: 10px 30px 50px 30px;
  }
  .wrapper form .field{
    height: 50px;
    width: 100%;
    margin-top: 20px;
    position: relative;
  }
  .wrapper form .field input{
    height: 100%;
    width: 100%;
    outline: none;
    font-size: 17px;
    padding-left: 20px;
    border: 1px solid lightgrey;
    border-radius: 25px;
    transition: all 0.3s ease;
  }
  .wrapper form .field input:focus,
  form .field input:valid{
    border-color: #4158d0;
  }
  .wrapper form .field label{
    position: absolute;
    top: 50%;
    left: 20px;
    color: #999999;
    font-weight: 400;
    font-size: 17px;
    pointer-events: none;
    transform: translateY(-50%);
    transition: all 0.3s ease;
  }
  form .field input:focus ~ label,
  form .field input:valid ~ label{
    top: 0%;
    font-size: 16px;
    color: #4158d0;
    background: #fff;
    transform: translateY(-50%);
  }
  form .content{
    display: flex;
    width: 100%;
    height: 50px;
    font-size: 16px;
    align-items: center;
    justify-content: space-around;
  }
  form .content .checkbox{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  form .content input{
    width: 15px;
    height: 15px;
    background: red;
  }
  form .content label{
    color: #262626;
    user-select: none;
    padding-left: 5px;
  }
  form .content .pass-link{
    color: "";
  }
  form .field input[type="submit"]{
    color: #fff;
    border: none;
    padding-left: 0;
    margin-top: -10px;
    font-size: 20px;
    font-weight: 500;
    cursor: pointer;
    background: linear-gradient(-135deg, #c850c0, #4158d0);
    transition: all 0.3s ease;
  }
  form .field input[type="submit"]:active{
    transform: scale(0.95);
  }
  form .signup-link{
    color: #262626;
    margin-top: 20px;
    text-align: center;
  }
  form .pass-link a,
  form .signup-link a{
    color: #4158d0;
    text-decoration: none;
  }
  form .pass-link a:hover,
  form .signup-link a:hover{
    text-decoration: underline;
  }
  `]
})
export class AdminComponent {
  email: string = '';
  password: string = '';
  message: string = ''; // Message to be displayed to the user

  constructor(private authService: AuthService) { }

  submit() {
    this.authService.loginadmin(this.email, this.password).subscribe(
      (response) => {
        console.log('Login successful', response);
        this.message = 'Login successful';
        // Optionally, you can redirect the user to another page upon successful login
      },
      (error) => {
        console.error('Login failed:', error);
        this.message = 'Login failed: ' + error;
        // Handle error (e.g., show error message to the user)
      }
    );
  }
}
