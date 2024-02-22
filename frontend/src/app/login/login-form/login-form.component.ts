import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { baseurl } from 'src/app/shared/url';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./SCSS/style.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginFormComponent implements OnInit {
  passwordFieldType: string = 'password';
  emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
  emailInalid: boolean = false;
  emailRequired: boolean = false;
  passwordRequired: boolean = false;
  loginData = {
    username: '',
    password: '',
    rememberMe: false,
  };

  constructor(private router: Router, private http: HttpClient) {
  }

  ngOnInit(): void {

  }

  login() {
    if (this.loginData.username.trim() == '') {
      this.emailRequired = true;
    }
    else {
      this.emailRequired = false;
    }
    if (this.emailRegex.test(this.loginData.username.trim()) == false) {
      this.emailInalid = true;
    }
    else {
      this.emailInalid = false;
    }
    if (this.loginData.password.trim() == '') {
      this.passwordRequired = true;
    }
    else {
      this.passwordRequired = false;
    }

    if (!this.emailInalid && !this.emailRequired && !this.passwordRequired) {
      this.http
        .post(`${baseurl}/login`, this.loginData)
        .pipe(
          catchError((error) => {
            console.error('There was a problem with the fetch operation:', error);
            return throwError(error);
          })
        )
        .subscribe((data) => {
          this.router.navigate(['/jobs']);
        });
    }
  }

  onRememberMeChange(event: Event): void {
    this.loginData.rememberMe = (event.target as HTMLInputElement).checked;
  }

  togglePassword(): void {
    this.passwordFieldType =
      this.passwordFieldType === 'password' ? 'text' : 'password';
  }
}
