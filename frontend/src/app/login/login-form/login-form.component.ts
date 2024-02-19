import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./SCSS/style.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginFormComponent implements OnInit {
  passwordFieldType: string = 'password';
  loginData = {
    username: '',
    password: '',
    rememberMe: false,
  };

  login() {
    // Your login logic here
    console.log('Username:', this.loginData.username);
    console.log('Password:', this.loginData.password);
    console.log('Remember Me:', this.loginData.rememberMe);
  }
  onRememberMeChange(event: Event): void {
    this.loginData.rememberMe = (event.target as HTMLInputElement).checked;
  }
  togglePassword(): void {
    this.passwordFieldType =
      this.passwordFieldType === 'password' ? 'text' : 'password';
  }
  constructor() {}

  ngOnInit(): void {}
}
