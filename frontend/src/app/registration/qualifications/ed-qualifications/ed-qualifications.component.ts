import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import {
  userData,
  Experienced,
  Fresher,
  Yesorno,
  qualification,
  College,
  Steam,
  JobRoles,
  year,
} from '../../userRegistrationData';
@Component({
  selector: 'app-ed-qualifications',
  templateUrl: './ed-qualifications.component.html',
  styleUrls: ['./SCSS/style.scss'],
})
export class EdQualificationsComponent implements OnInit {
  // selectedRoles: string[] = [];
  @Output() eduQualificationUpdated = new EventEmitter<any>();

  educational: any = {
    Percentage: 0,
    YearOfPassing: year.val6,
    Qualification: qualification.val1,
    Stream: Steam.val1,
    College: College.val1,
    otherCollege: '',
    collegeLocation: '',
  };

  updateEduQualificationInfo(): void {
    this.eduQualificationUpdated.emit(this.educational);
    console.log(
      'educational qualification updated in child component' + this.educational
    );
  }
  constructor() {}

  ngOnInit(): void {}
}
