import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobInfoComponent } from './job-info/job-info.component';
import { RolesOfferedComponent } from './job-info/roles-offered/roles-offered.component';
import { AppliedComponent } from './job-info/applied/applied.component';



@NgModule({
  declarations: [
    JobInfoComponent,
    RolesOfferedComponent,
    AppliedComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    JobInfoComponent
  ]
})
export class ApplicationModule { }
