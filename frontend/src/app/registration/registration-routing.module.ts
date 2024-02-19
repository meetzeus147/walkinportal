import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegistrationComponent } from './registration.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { QualificationsComponent } from './qualifications/qualifications.component';
import { ReviewComponent } from './review/review.component';

const routes: Routes = [
  { path: 'registration', component: RegistrationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrationRoutingModule {}
