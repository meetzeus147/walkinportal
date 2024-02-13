import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { CreateAccountBarComponent } from './registration/create-account-bar/create-account-bar.component';
import { JobInfoComponent } from './application/job-info/job-info.component';
import { AppliedComponent } from './application/job-info/applied/applied.component';
import { PersonalInfoComponent } from './registration/personal-info/personal-info.component';
import { ProgressBarComponent } from './registration/progress-bar/progress-bar.component';

const routes: Routes = [
  {path: '', component: LoginFormComponent},
  {path: 'login', component: LoginFormComponent},
  {path: 'register',component: CreateAccountBarComponent},
  {path: 'application', component: JobInfoComponent},
  {path: 'applied', component: AppliedComponent, data: {}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
