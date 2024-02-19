import { HttpClient } from '@angular/common/http';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { IApplicationInfo, IJobData } from '../JobData';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-job-info',
  templateUrl: './job-info.component.html',
  styleUrls: ['./job-info.component.scss'],
})
export class JobInfoComponent implements OnInit {
  Jobs: IJobData[] = [];
  selectedRoles: string[] = [];
  applications: IApplicationInfo = {
    ApplicationJobId: 0,
    ApplicationId: Math.floor(Math.random() * 10000),
    SelectedTimeSlots: '',
    selectedRoles: [],
    UploadedResume: null,
  };
  constructor(
    private http: HttpClient,
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}
  emitData() {
    this.dataService.sendData(this.applications);
  }
  fetchData(jobid: number): void {
    this.http
      .get<IJobData[]>('/assets/JobDataJson.json')
      .pipe(
        catchError((error) => {
          console.error('There was a problem with the fetch operation:', error);
          return throwError(error);
        })
      )
      .subscribe((data) => {
        this.Jobs = data;
        // console.log(data);
      });
  }
  jobid: any;
  // UploadApplicationData()
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      // id is not null, so it's safe to use
      this.jobid = +id;
      this.applications.ApplicationJobId = this.jobid;
      // Now use numericId as needed
    } else {
      this.jobid = 1;
      // Handle the case where 'id' is null
    }
    this.fetchData(this.jobid);
    console.log(this.jobid);
  }

  isNotExpanded = false;
  maxHeight: number = 0;

  toggleExpansion() {
    this.isNotExpanded = !this.isNotExpanded;
    if (this.isNotExpanded) {
      this.maxHeight = 0;
    } else {
      const contentElement = document.querySelector('.job-pre-requisite');
      this.maxHeight = contentElement ? contentElement.scrollHeight : 0;
    }
  }

  toggleJobRole(role: string): void {
    const index = this.selectedRoles.indexOf(role);
    if (index !== -1) {
      this.selectedRoles.splice(index, 1); // Remove role if already selected
    } else {
      this.selectedRoles.push(role); // Add role if not already selected
    }
    console.log('Selected job roles:', this.selectedRoles);
    this.applications.selectedRoles = this.selectedRoles;
    console.log('selected job roles:', this.applications.selectedRoles);
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
  convertTo12HourFormat(time24: string) {
    const [hours, minutes, seconds] = time24.split(':');

    let period = 'AM';
    let adjustedHours = parseInt(hours, 10);

    if (adjustedHours >= 12) {
      period = 'PM';
      adjustedHours = adjustedHours > 12 ? adjustedHours - 12 : adjustedHours;
    }

    const time12 = `${adjustedHours
      .toString()
      .padStart(2, '0')}:${minutes} ${period}`;
    return time12;
  }

  input = document.querySelector('#resume-input');
  fileName = document.querySelector('.file-name');
  inputFile: any;

  uploadResume(event: any): void {
    this.inputFile = event.target.files[0];
    console.log(this.inputFile);
    this.fileName = this.inputFile ? this.inputFile.name : '';
  }
}
