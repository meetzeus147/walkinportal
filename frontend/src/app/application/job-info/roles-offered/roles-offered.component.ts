import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-roles-offered',
  templateUrl: './roles-offered.component.html',
  styleUrls: ['./roles-offered.component.scss']
})
export class RolesOfferedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() role:any

  isNotExpanded = false;

  toggleExpansion() {
    this.isNotExpanded = !this.isNotExpanded;
  }

}
