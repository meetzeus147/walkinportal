import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./SCSS/style.scss'],
})
export class ReviewComponent implements OnInit {
  @Input() UserData: any;

  fileName: string = '';
  profilePhotoSrc: string = '../../../assets/images/default-profile-photo.png';
  constructor() {}

  uploadResume(event: any): void {
    const inputFile = event.target.files[0];
    console.log(inputFile);
    this.fileName = inputFile ? inputFile.name : '';
  }

  ngOnInit(): void {
    console.log('jenish logging from review object' + this.UserData);

    if (
      this.UserData &&
      this.UserData.Qualifications &&
      this.UserData.Qualifications.ProfessionalQualifications
    ) {
      const applicantType =
        this.UserData.Qualifications.ProfessionalQualifications.ApplicantType;
      console.log('ApplicantType:', applicantType);

      if (applicantType === 'Fresher') {
        this.showFresherQualifications();
      } else if (applicantType === 'Experienced') {
        this.showProfessionalQualifications();
      } else {
        this.hideAllQualifications();
      }
    }

    this.showPhoto();
  }
  async showPhoto() {
    await this.UserData.PersonalInformation.ProfilePhoto;
    if (this.UserData.PersonalInformation.ProfilePhoto) {
      const blob = new Blob([this.UserData.PersonalInformation.ProfilePhoto],{type: this.UserData.PersonalInformation.ProfilePhoto.type});
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onload = async (e: any) => {
        this.profilePhotoSrc = await this.UserData.PersonalInformation.ProfilePhoto;
      };
    }
  }

  private showFresherQualifications(): void {
    document.querySelector('.proqualifications')?.classList.add('hidden');
    document
      .querySelector('.fresherqualifications')
      ?.classList.remove('hidden');
  }

  private showProfessionalQualifications(): void {
    document.querySelector('.proqualifications')?.classList.remove('hidden');
    document.querySelector('.fresherqualifications')?.classList.add('hidden');
  }

  private hideAllQualifications(): void {
    document.querySelector('.proqualifications')?.classList.add('hidden');
    document.querySelector('.fresherqualifications')?.classList.add('hidden');
  }
}
