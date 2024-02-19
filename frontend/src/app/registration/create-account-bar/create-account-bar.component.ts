import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account-bar',
  templateUrl: './create-account-bar.component.html',
  styleUrls: ['./SCSS/style.scss'],
})
export class CreateAccountBarComponent implements OnInit {
  @Input() createshow: boolean = false; // Input property to track review show status
  constructor(private router: Router) {}

  ngOnInit(): void {}

  // Add a method to dynamically set the class based on the reviewShow status
  getCreateButtonClass() {
    return this.createshow
      ? 'create-account-button create-button active'
      : 'create-account-button create-button inactive';
  }
  onCreateClick() {
    if (this.createshow) this.router.navigate(['/login']);
  }
}
