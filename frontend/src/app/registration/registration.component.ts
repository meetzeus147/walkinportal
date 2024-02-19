import {
  Component,
  OnInit,
  ViewEncapsulation,
  Output,
  EventEmitter,
} from '@angular/core';

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
  ProfessionalQualification,
} from './userRegistrationData';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class RegistrationComponent implements OnInit {
  // show2: boolean = false;
  personalShow: boolean = true;
  qualificationShow: boolean = false;
  reviewShow: boolean = false;
  userData: userData = {
    PersonalInformation: {
      FirstName: '',
      LastName: '',
      Email: '',
      ProfilePhoto: null,
      PhoneNumber: '',
      PortfolioURL: '',
      Referral: '',
      sendemail: false,
      countryCode: '',
      Resume: null,
      ResumeFileName: '',
      PreferredJobRoles: []
    },
    Qualifications: {
      EducationalQualifications: {
        Percentage: 0,
        YearOfPassing: year.val6,
        Qualification: qualification.val1,
        Stream: Steam.val1,
        College: College.val1,
        otherCollege: '',
        collegeLocation: ''
      },
      ProfessionalQualifications: {
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
        RoleAppearedIn: ''
      },
    },
  };
  Freshers: Fresher = {
    ApplicantType: '',
    TechFamiliar: [],
    OtherTechFamiliar: '',
    AppearedIn: Yesorno.No,
    RoleAppearedIn: ''
  };
  experience: Experienced = {
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
    RoleAppearedIn: ''
  };

  userDataArray: userData[] = [];

  // initializeProfessionalQualifications(applicantType: string): void {
  //   if (applicantType === 'Fresher') {
  //     this.userData.Qualifications.ProfessionalQualifications = {
  //       ...this.Freshers,
  //     };
  //   } else if (applicantType === 'Experienced') {
  //     this.userData.Qualifications.ProfessionalQualifications = {
  //       ...this.experience,
  //     };
  //   } else {
  //     console.error('Invalid applicant type');
  //   }
  // }
  updatePersonalInfo(personalInfo: any): void {
    this.userData.PersonalInformation = personalInfo;
    console.log(
      'registration component ' +
        this.userData.PersonalInformation.PreferredJobRoles
    );
  }

  updateEducationQualifications(eduQualifications: any): void {
    this.userData.Qualifications.EducationalQualifications = eduQualifications;
    console.log(
      'registration component ' +
        this.userData.Qualifications.EducationalQualifications.Percentage
    );
  }
  // updateProfessionalQualifications(profQualifications: any): void {
  //   let profQual = this.userData.Qualifications.ProfessionalQualifications;

  //   console.log('Applicant Type:', profQual.ApplicantType);

  //   if (profQualifications.ApplicantType === 'Fresher') {
  //     profQual = {
  //       ...this.Freshers,
  //     };
  //   } else if (profQualifications.ApplicantType === 'Experienced') {
  //     console.log('Updating for Experienced');
  //     console.log('Experience:', this.experience);
  //     // Assign properties only if they are defined
  //     if (this.experience) {
  //       profQual = {
  //         ...this.experience,
  //       };
  //     }
  //   }
  //   profQual = profQualifications;

  //   // Console log for debugging (comment out in production)
  //   console.log(
  //     'in regestration component Professional Qualifications:',
  //     profQual
  //   );
  // }
  updateProfessionalQualifications(profQualifications: any): void {
    if (!profQualifications) {
      console.error('Professional qualifications data is missing');
      return;
    }
    this.userData.Qualifications.ProfessionalQualifications =
      profQualifications;
    const profQual = console.log(
      this.userData.Qualifications.ProfessionalQualifications.ApplicantType
    );
    // Check the applicant type and access properties accordingly
    if (
      this.userData.Qualifications.ProfessionalQualifications.ApplicantType ===
      'Fresher'
    ) {
      // Handle Fresher type
      const fresherQualifications = this.userData.Qualifications
        .ProfessionalQualifications as Fresher;
      fresherQualifications.TechFamiliar = profQualifications.TechFamiliar;
      fresherQualifications.OtherTechFamiliar =
        profQualifications.OtherTechFamiliar;
      fresherQualifications.AppearedIn = profQualifications.AppearedIn;
      fresherQualifications.RoleAppearedIn = profQualifications.RoleAppearedIn;
    } else if (
      this.userData.Qualifications.ProfessionalQualifications.ApplicantType ===
      'Experienced'
    ) {
      // Handle Experienced type
      const experiencedQualifications = this.userData.Qualifications
        .ProfessionalQualifications as Experienced;
      experiencedQualifications.YearsOfExperience =
        profQualifications.YearsOfExperience;
      experiencedQualifications.CurrentCTC = profQualifications.CurrentCTC;
      experiencedQualifications.ExpectedCTC = profQualifications.ExpectedCTC;
      experiencedQualifications.TechExpertized =
        profQualifications.TechExpertized;
      experiencedQualifications.OtherTechExpertized =
        profQualifications.OtherTechExpertized;
      experiencedQualifications.NoticePeriod = profQualifications.NoticePeriod;
      experiencedQualifications.NoticePeriodEndDate =
        profQualifications.NoticePeriodEndDate;
      experiencedQualifications.AppearedIn = profQualifications.AppearedIn;
      experiencedQualifications.RoleAppearedIn =
        profQualifications.RoleAppearedIn;
    } else {
      console.error('Invalid applicant type');
      return;
    }

    // Console log for debugging (comment out in production)
    console.log(
      'in registration component Professional Qualifications:',
      this.userData.Qualifications.ProfessionalQualifications
    );
  }

  saveUserData(): void {
    this.userDataArray.push({ ...this.userData });
    // Reset userData object for next entry
    this.userData = {
      PersonalInformation: {
        FirstName: '',
        LastName: '',
        Email: '',
        ProfilePhoto: null,
        PhoneNumber: '',
        PortfolioURL: '',
        Referral: '',
        sendemail: false,
        countryCode: '',
        Resume: null,
        ResumeFileName: '',
        PreferredJobRoles: [],
      },
      Qualifications: {
        EducationalQualifications: {
          Percentage: 0,
          YearOfPassing: year.val6,
          Qualification: qualification.val1,
          Stream: Steam.val1,
          College: College.val1,
          otherCollege: '',
          collegeLocation: '',
        },
        ProfessionalQualifications: {
          ApplicantType: '',
        } as ProfessionalQualification,
      },
    };
  }
  constructor() {}

  previous(): void {
    // const personalinfo = document.querySelector('.step1');
    // const qualifications = document.querySelector('.step2');
    if (!this.qualificationShow && this.reviewShow) {
      this.personalShow = false;
      this.qualificationShow = true;
      this.reviewShow = false;
    } else if (!this.personalShow && this.qualificationShow) {
      this.personalShow = true;
      this.qualificationShow = false;
      this.reviewShow = false;
    }
  }
  next(): void {
    // const personalinfo = document.querySelector('.step1');
    // const qualifications = document.querySelector('.step2');
    if (!this.qualificationShow && this.personalShow) {
      this.personalShow = false;
      this.qualificationShow = true;
      this.reviewShow = false;
    } else if (!this.reviewShow && this.qualificationShow) {
      this.personalShow = false;
      this.qualificationShow = false;
      this.reviewShow = true;
    }
  }
  ngOnInit(): void {
    console.log(this.userData);
  }
}
