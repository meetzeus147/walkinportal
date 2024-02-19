import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IJobData, IApplicationInfo } from './JobData';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { DataService } from 'src/app/shared/data.service';
import { ApplicationService } from 'src/app/shared/application.service';

@Component({
  selector: 'app-job-page',
  templateUrl: './job-page.component.html',
  styleUrls: ['./SCSS/style.scss'],
})
export class JobPageComponent implements OnInit {
  Job: IJobData[] = [];
  applicationArray: IApplicationInfo[] = [];
  constructor(
    private http: HttpClient,
    private dataService: DataService,
    private ApplicationService: ApplicationService
  ) {}

  ngOnInit(): void {
    this.fetchData();
    this.dataService.data$.subscribe((data) => {
      this.applicationArray = this.applicationArray + data;
      // console.log(data);
      console.log(
        this.applicationArray +
          'jobpage application data stored in application array'
      );
    });
    // console.log(this.receivedData);
    this.emitData();
  }
  emitData() {
    this.ApplicationService.sendData(this.applicationArray);
  }

  fetchData(): void {
    this.http
      .get<IJobData[]>('/assets/JobDataJson.json')
      .pipe(
        catchError((error) => {
          console.error('There was a problem with the fetch operation:', error);
          return throwError(error);
        })
      )
      .subscribe((data) => {
        this.Job = data;
        // console.log(data);
      });
  }

  formatdate(date: Date): string {
    const originalDate = new Date(date);
    const monthNames = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    const day = originalDate.getDate();
    const month = monthNames[originalDate.getMonth()];
    const year = originalDate.getFullYear();
    const formattedDateString = `${day}-${month}-${year}`;
    // console.log(formattedDateString);
    return formattedDateString;
  }
}
