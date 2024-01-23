import { Component, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { InputComponent } from '../input/input.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile-edit',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatCardModule,
    MatIconModule,
    InputComponent,
  ],
  templateUrl: './profile-edit.component.html',
  styleUrl: './profile-edit.component.scss',
})
export class ProfileEditComponent implements AfterViewInit {
  userImg: string = '../../assets/img/person.svg';
  userFullName: string = '';
  userEmail: string = '';
  nameValid: boolean = false;
  emailValid: boolean = false;
  constructor(
    private elementRef: ElementRef,
    public dialogRef: MatDialogRef<ProfileEditComponent>
  ) {}

  ngAfterViewInit() {
    const inputElement =
      this.elementRef.nativeElement.querySelectorAll('input');
    if (inputElement) {
      inputElement.forEach((input: any) => {
        input.setAttribute('tabindex', '-1');
      });
    }
  }

  ngOnInit(): void {
    const user = localStorage.getItem('user');
    if (user !== null) {
      const newUser = JSON.parse(user);
      this.userFullName = newUser.fullName;
      this.userEmail = newUser.email;
    }
  }

  onValidityChanged(field: string, isValid: boolean) {
    switch (field) {
      case 'name':
        this.nameValid = isValid;
        break;
      case 'email':
        this.emailValid = isValid;
        break;
    }
  }

  saveUser() {
    const fullName = this.createFullName(this.userFullName);
    const email = this.userEmail.toLowerCase();
    const user = { fullName, email };
    localStorage.setItem('user', JSON.stringify(user));

    setTimeout(() => {
      this.onNoClick();
    }, 500);
  }

  createFullName(fullName: string) {
    let firstName = fullName.split(' ')[0];
    let lastName = fullName.split(' ')[1];

    firstName = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
    lastName = lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();
    return `${firstName} ${lastName}`;
  }

  onNoClick() {
    this.dialogRef.close();
  }
}
