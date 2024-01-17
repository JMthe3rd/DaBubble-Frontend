import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, Form, FormControl, ValidationErrors } from '@angular/forms';
import { InputComponent } from "../input/input.component";
import { LogoMiddleComponent } from "../logo-middle/logo-middle.component";
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reset-pw',
  standalone: true,
  templateUrl: './reset-pw.component.html',
  styleUrl: './reset-pw.component.scss',
  imports: [
    CommonModule,
    InputComponent,
    LogoMiddleComponent,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ]
})
export class ResetPwComponent implements OnInit {
  resetPwForm!: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.resetPwForm = this.fb.group({
      password: ['', [Validators.required]],
      passwordConfirm: ['', [Validators.required]],
    }, { validators: this.passwordMatchValidator.bind(this) });
    console.log('buildForm() wurde ausgeführt!');

  }

  // ngAfterViewInit(): void {
  //   const passwordConfirmationControl = this.resetPwForm.get('passwordConfirm');
  //   if (passwordConfirmationControl) {
  //     passwordConfirmationControl.setValidators([
  //       Validators.required, this.passwordMatchValidator.bind(this),
  //     ]);
  //   }
  // }

  resetPW() {
    console.log('resetPW() wurde ausgeführt', this.resetPwForm.get('password')?.value);
    // this.passwordMatchValidator();
  }

  passwordMatchValidator(fb: FormGroup): ValidationErrors | null {
    const password = fb.get('password')?.value;
    const passwordConfirm = fb.get('passwordConfirm')?.value;
    // console.log(password, passwordConfirm);
    console.log('input.value PASSWORD', password);

    return password === passwordConfirm ? null : { passwordMismatch: true };
  }
}
