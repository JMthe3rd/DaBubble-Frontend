import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { LogoMiddleComponent } from '../logo-middle/logo-middle.component';
import { InputComponent } from '../input/input.component';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule,
    LogoMiddleComponent,
    InputComponent,
    FormsModule,
    RouterLink,
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  @Output() inputChange = new EventEmitter<any>();

  fullName: any = '';
  email: any = '';
  password: any = '';
  ifSuccess: boolean = true;

  nameValid: boolean = false;
  emailValid: boolean = false;
  passwordValid: boolean = false;

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
      // Add more cases if needed for additional inputs
    }
  }

  isFormValid(): boolean {
    return this.nameValid && this.emailValid && this.passwordValid;
  }
}
