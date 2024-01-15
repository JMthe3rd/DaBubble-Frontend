import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from "@angular/common";

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { LogoMiddleComponent } from '../logo-middle/logo-middle.component';
import { InputComponent } from '../input/input.component';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    InputComponent,
    LogoMiddleComponent,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    RouterLink,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {
  }
  removeBackground: boolean = false;
  moveLogo: boolean = false;
  changeLogoColor: boolean = false;
  animationCompleted: boolean = false;
  @ViewChild('animationContainer') animationContainer!: ElementRef;

  ngOnInit(): void {
    this.initializeAnimation();
  }

  initializeAnimation() {
    setTimeout(() => {
      this.removeBackground = true;
    }, 4500);
    setTimeout(() => {
      this.changeLogoColor = true;
      this.moveLogo = true;
    }, 3500);
    setTimeout(() => {
      this.animationCompleted = true;
    }, 5500);
  }
}

