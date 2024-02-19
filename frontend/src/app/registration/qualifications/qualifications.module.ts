import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { QualificationsComponent } from './qualifications.component';
import { EdQualificationsComponent } from './ed-qualifications/ed-qualifications.component';
import { ProQualificationsComponent } from './pro-qualifications/pro-qualifications.component';
@NgModule({
  declarations: [
    EdQualificationsComponent,
    ProQualificationsComponent,
    QualificationsComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    EdQualificationsComponent,
    ProQualificationsComponent,
    QualificationsComponent,
  ],
})
export class QualificationsModule {}
