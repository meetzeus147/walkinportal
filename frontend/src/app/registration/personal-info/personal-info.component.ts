import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  input = document.querySelector("#resume-input");
  fileName = document.querySelector(".file-name");
  inputFile:any;

  uploadResume(event:any):void{
    this.inputFile = event.target.files[0];
    console.log(this.inputFile);
    this.fileName=this.inputFile?this.inputFile.name:'';
  }

  photoinput = document.querySelector(".photo-input");
  inputPhoto:any;
  profilePhotoSrc: string = '../../../assets/images/default-profile-photo.png';

  uploadProfilePhoto(event:any):void{
    this.inputPhoto = event.target.files[0];
    if (this.inputPhoto) {
      // Assuming you have a method to handle image uploads and get a URL
      // For example, you can use FileReader to read the image and convert it to a data URL
      const reader = new FileReader();
      
      reader.onload = (e: any) => {
        this.profilePhotoSrc = e.target.result;
      };
      
      reader.readAsDataURL(this.inputPhoto);
    }
  }

}
