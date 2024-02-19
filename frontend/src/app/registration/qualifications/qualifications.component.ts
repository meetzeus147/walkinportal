import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-qualifications',
  templateUrl: './qualifications.component.html',
  styleUrls: ['./SCSS/style.scss'],
})
export class QualificationsComponent implements OnInit {
  @Output() eduQualificationUpdated = new EventEmitter<any>();
  @Output() proQualificationUpdated = new EventEmitter<any>();
  constructor() {}
  updateEducationQualifications(eduQualifications: any): void {
    this.eduQualificationUpdated.emit(eduQualifications); // Re-emit the event if needed
  }
  updateProfessionalQualifications(proQualifications: any): void {
    this.proQualificationUpdated.emit(proQualifications); // Re-emit the event if needed
  }

  ngOnInit(): void {}
}
