import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'RegisterComponent',
  template: `
  <div class="wrapper " style="margin-left: 40%;margin-top:7%; margin-bottom:3%;">
  <div class="title">
     Login Form
  </div>
  <form [formGroup]="formProduct" (ngSubmit)="addUser()">
     <div class="field">
        <input type="text" formControlName="email" id="email" aria-describedby="helpId" placeholder="Email">

     </div>
     <div class="field">
        <input type="password" formControlName="password" id="password" autocomplete="on"  placeholder="Password" aria-describedby="helpId">

     </div>
     <div class="field">
        <input type="password" formControlName="confirmpassword" autocomplete="on" id="confirm_password" placeholder="Confirm Password" aria-describedby="helpId">

     </div>
     <div class="field">
        <input type="submit" [disabled]="formProduct.invalid" value="SUBMIT" >
     </div>
     <a class="nav-link text-center" href="#" routerLink="/login">đăng nhập ngay<span
     class="sr-only">(current)</span></a>
  </form>

</div>
   
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
    text-align:center;
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
  }`]
})
export class RegisterComponent implements OnInit {
  formProduct!: FormGroup; // Sử dụng dấu chấm hỏi (!) sau tên biến

  constructor(private authService: AuthService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.formProduct = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmpassword: ['', Validators.required]
    });
  }

  addUser() {
    if (this.formProduct.valid) {
      this.authService.register(this.formProduct.value).subscribe(() => {
        this.resetForm();
      });
    }
  }

  resetForm() {
    this.formProduct.reset();
  }
}
