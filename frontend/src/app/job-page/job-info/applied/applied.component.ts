import { Component, Input, OnInit } from '@angular/core';

import { DataService } from 'src/app/shared/data.service';
import { ApplicationService } from 'src/app/shared/application.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IJobData, IApplicationInfo } from '../../JobData';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Component({
  selector: 'app-applied',
  templateUrl: './applied.component.html',
  styleUrls: ['./applied.component.scss'],
})
export class AppliedComponent implements OnInit {
  Job: IJobData[] = [];
  application: IApplicationInfo = {
    ApplicationJobId: 0,
    ApplicationId: 0,
    SelectedTimeSlots: '',
    selectedRoles: [],
    UploadedResume: null,
  };
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private ApplicationService: ApplicationService
  ) {}
  applicationdetails: string = '';
  ngOnInit(): void {
    console.log(this.application);
  }
  loadData(): void {}
}
