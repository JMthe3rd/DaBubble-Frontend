import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { InputComponent } from '../input/input.component';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule,
    LogoComponent,
    InputComponent,
    FormsModule,
    RouterLink,
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  @Output() inputChange = new EventEmitter<any>();

  images = [
    '../../assets/img/checkbox-empty.svg',
    '../../assets/img/checkbox-checked.svg',
  ];
  position: number = 0;
  fullName: any = '';
  email: any = '';
  password: any = '';
  ifSuccess: boolean = true;
  active: boolean = false;
  windowWidth: number = 0;

  nameValid: boolean = false;
  emailValid: boolean = false;
  passwordValid: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.windowWidth = window.innerWidth;
    if (this.windowWidth <= 1100) {
      this.active = true;
    } else {
      this.active = false;
    }
  }

  @HostListener('window:load', ['$event'])
  onLoad(event: Event): void {
    this.windowWidth = window.innerWidth;
    if (this.windowWidth <= 1100) {
      this.active = true;
    } else {
      this.active = false;
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
      case 'password':
        this.passwordValid = isValid;
        break;
    }
  }

  onCheckboxChange() {
    this.position = this.position === 0 ? 1 : 0;
  }

  isFormValid(): any {
    if (this.windowWidth < 1100) {
      return this.nameValid && this.emailValid && this.passwordValid;
    }
    return (
      this.nameValid &&
      this.emailValid &&
      this.passwordValid &&
      this.position === 1
    );
  }
}
