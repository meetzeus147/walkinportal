import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';

import { LoginModule } from './login/login.module';
import { RegistrationModule } from './registration/registration.module';
import { JobModule } from './job-page/job-page.module';
@NgModule({
  declarations: [AppComponent, HeaderComponent, ContactComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    LoginModule,
    RegistrationModule,
    JobModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
