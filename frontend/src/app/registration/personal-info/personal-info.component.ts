import { Component, OnInit, EventEmitter, Output } from '@angular/core';
// import { userData } from '../userRegistrationData';
@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./SCSS/style.scss']
})
export class PersonalInfoComponent implements OnInit {
  selectedRoles: string[] = [];
  @Output() personalInfoUpdated = new EventEmitter<any>();

  personalInfo: any = {
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
  };

  updatePersonalInfo(): void {
    this.personalInfoUpdated.emit(this.personalInfo);
    console.log('Personal info updated in child component' + this.personalInfo);
  }
  constructor() {}

  ngOnInit(): void {}

  toggleJobRole(role: string): void {
    const index = this.selectedRoles.indexOf(role);
    if (index !== -1) {
      this.selectedRoles.splice(index, 1); // Remove role if already selected
    } else {
      this.selectedRoles.push(role); // Add role if not already selected
    }
    console.log('Selected job roles:', this.selectedRoles);
    this.personalInfo.PreferredJobRoles = this.selectedRoles;
    console.log('selected job roles:', this.personalInfo.PreferredJobRoles);
  }
  input = document.querySelector('#resume-input');
  fileName = document.querySelector('.file-name');
  inputFile: any;

  uploadResume(event: any): void {
    this.inputFile = event.target.files[0];
    if(this.inputFile){
      this.personalInfo.Resume = this.inputFile;
      const blob = new Blob([this.inputFile],{type: this.inputFile.type});

      const reader = new FileReader();
      reader.readAsDataURL(blob);

      reader.onload = async (e: any) => {
        this.personalInfo.Resume = await e.target.result;
      };
    }
    this.fileName = this.inputFile ? this.inputFile.name : '';
    this.personalInfo.ResumeFileName = this.fileName;
  }

  photoinput = document.querySelector('.photo-input');
  inputPhoto: any;
  profilePhotoSrc: string = '../../../assets/images/default-profile-photo.png';

  uploadProfilePhoto(event: any): void {
    this.inputPhoto = event.target.files[0];
    if (this.inputPhoto) {
      this.personalInfo.ProfilePhoto = this.inputPhoto;
      const blob = new Blob([this.inputPhoto],{type: this.inputPhoto.type});

      const reader = new FileReader();
      reader.readAsDataURL(blob);

      reader.onload = async (e: any) => {
        this.personalInfo.ProfilePhoto = await e.target.result;
        this.profilePhotoSrc = await this.personalInfo.ProfilePhoto;
      };
    }
  }
}
