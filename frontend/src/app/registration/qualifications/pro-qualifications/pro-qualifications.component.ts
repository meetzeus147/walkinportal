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
  Tech,
} from '../../userRegistrationData';
@Component({
  selector: 'app-pro-qualifications',
  templateUrl: './pro-qualifications.component.html',
  styleUrls: ['./SCSS/style.scss'],
})
export class ProQualificationsComponent implements OnInit {
  selectedExpertise: Boolean = false;
  selectedFamiliarTechFresh: string[] = [];
  selectedFamiliarTechExperience: string[] = [];
  selectedExpertiseTech: string[] = [];
  @Output() ProQualificationsUpdated = new EventEmitter<any>();

  Fresherinfo: Fresher = {
    ApplicantType: '',
    TechFamiliar: [],
    OtherTechFamiliar: '',
    AppearedIn: Yesorno.No,
    RoleAppearedIn: '',
  };
  experienceinfo: Experienced = {
    ApplicantType: '',
    YearsOfExperience: 0,
    CurrentCTC: '',
    ExpectedCTC: '',
    TechExpertized: [],
    OtherTechExpertized: '',
    TechFamiliar: [],
    OtherTechFamiliar: '',
    NoticePeriod: Yesorno.No,
    NoticePeriodEndDate: new Date(),
    AppearedIn: Yesorno.No,
    RoleAppearedIn: '',
  };

  updateApplicantInfo(applicantType: string): void {
    if (applicantType === 'Fresher') {
      this.ProQualificationsUpdated.emit(this.Fresherinfo);
      this.selectedExpertise = false;
      console.log(
        'professional qualifications info updated in child component as fresher type ',
        this.Fresherinfo
      );
    } else if (applicantType === 'Experienced') {
      this.ProQualificationsUpdated.emit(this.experienceinfo);
      this.selectedExpertise = true;
      console.log(
        'professional qualifications info updated in child component as experienced type ',
        this.experienceinfo
      );
    } else {
      this.selectedExpertise = false;
      console.log('Invalid applicant type selected.');
    }
  }
  toggleFamiliarTech(Techno: string): void {
    if (this.selectedExpertise) {
      const index = this.selectedFamiliarTechExperience.indexOf(Techno);
      if (index !== -1) {
        this.selectedFamiliarTechExperience.splice(index, 1); // Remove role if already selected
      } else {
        this.selectedFamiliarTechExperience.push(Techno); // Add role if not already selected
      }
      console.log(
        'Selected Familiar Tech:',
        this.selectedFamiliarTechExperience
      );
      this.experienceinfo.TechFamiliar =
        this.selectedFamiliarTechExperience.map((tech) => {
          switch (tech) {
            case 'Javascript':
              return 'Javascript' as Tech;
            case 'Angular JS':
              return 'Angular JS' as Tech;
            case 'React':
              return 'React' as Tech;
            case 'Node JS':
              return 'Node JS' as Tech;
            case 'Others':
              return 'Others' as Tech;
            default:
              throw new Error(`Unknown technology: ${tech}`);
          }
        });
    } else {
      const index = this.selectedFamiliarTechFresh.indexOf(Techno);
      if (index !== -1) {
        this.selectedFamiliarTechFresh.splice(index, 1); // Remove role if already selected
      } else {
        this.selectedFamiliarTechFresh.push(Techno); // Add role if not already selected
      }
      console.log('Selected Familiar Tech:', this.selectedFamiliarTechFresh);
      this.Fresherinfo.TechFamiliar = this.selectedFamiliarTechFresh.map(
        (tech) => {
          switch (tech) {
            case 'Javascript':
              return 'Javascript' as Tech;
            case 'Angular JS':
              return 'Angular JS' as Tech;
            case 'React':
              return 'React' as Tech;
            case 'Node JS':
              return 'Node JS' as Tech;
            case 'Others':
              return 'Others' as Tech;
            default:
              throw new Error(`Unknown technology: ${tech}`);
          }
        }
      );
    }
  }
  toggleExpertiseTech(Techno: string): void {
    const index = this.selectedExpertiseTech.indexOf(Techno);
    if (index !== -1) {
      this.selectedExpertiseTech.splice(index, 1); // Remove role if already selected
    } else {
      this.selectedExpertiseTech.push(Techno); // Add role if not already selected
    }
    console.log('Selected Familiar Tech:', this.selectedExpertiseTech);
    this.experienceinfo.TechExpertized = this.selectedExpertiseTech.map(
      (tech) => {
        switch (tech) {
          case 'Javascript':
            return 'Javascript' as Tech;
          case 'Angular JS':
            return 'Angular JS' as Tech;
          case 'React':
            return 'React' as Tech;
          case 'Node JS':
            return 'Node JS' as Tech;
          case 'Others':
            return 'Others' as Tech;
          default:
            throw new Error(`Unknown technology: ${tech}`);
        }
      }
    );
  }
  constructor() {}

  ngOnInit(): void {
    const applicanttype = document.querySelectorAll('input[name="Applicant"]');
    applicanttype.forEach((applicanttype) => {
      if (applicanttype) {
        applicanttype.addEventListener('change', function () {
          let item = (applicanttype as HTMLInputElement).value;

          if (item === 'Fresher') {
            (
              document.querySelector('.proqualifications') as HTMLInputElement
            ).style.display = 'none';
            (
              document.querySelector(
                '.fresherqualifications'
              ) as HTMLInputElement
            ).style.display = 'block';
          } else if (item === 'Experienced') {
            (
              document.querySelector('.proqualifications') as HTMLInputElement
            ).style.display = 'block';
            (
              document.querySelector(
                '.fresherqualifications'
              ) as HTMLInputElement
            ).style.display = 'none';
          } else {
            (
              document.querySelector('.proqualifications') as HTMLInputElement
            ).style.display = 'none';
            (
              document.querySelector(
                '.fresherqualifications'
              ) as HTMLInputElement
            ).style.display = 'none';
          }
        });
      }
    });
  }
}
