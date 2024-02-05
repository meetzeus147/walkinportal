import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccountBarComponent } from './create-account-bar.component';

describe('CreateAccountBarComponent', () => {
  let component: CreateAccountBarComponent;
  let fixture: ComponentFixture<CreateAccountBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAccountBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAccountBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
