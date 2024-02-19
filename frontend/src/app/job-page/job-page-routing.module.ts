import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JobPageComponent } from './job-page.component';
import { JobInfoComponent } from './job-info/job-info.component';
import { AppliedComponent } from './job-info/applied/applied.component';

const routes: Routes = [
  { path: 'jobs', component: JobPageComponent },
  { path: 'jobs/:id', component: JobInfoComponent },
  { path: 'jobs/:id/:applicationid  ', component: AppliedComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobPageRoutingModule {}
