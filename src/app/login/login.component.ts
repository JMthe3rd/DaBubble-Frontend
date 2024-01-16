import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  ViewChild,
  OnInit,
  HostListener,
  Renderer2,
} from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { InputComponent } from '../input/input.component';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    InputComponent,
    LogoComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  renderer: any = Renderer2;
  el: any = ElementRef;
  constructor(private router: Router, renderer: Renderer2, el: ElementRef) {
    this.renderer = renderer;
    this.el = el;
  }
  removeBackground: boolean = false;
  moveLogo: boolean = false;
  changeLogoColor: boolean = false;
  animationCompleted: boolean = false;
  showDesktop: boolean = false;
  showMobile: boolean = false;
  windowWidth: number = 0;
  logoBig: boolean = false;
  desktopAnimation: boolean = false;
  mobileAnimation: boolean = false;
  mobileActive: boolean = false;
  @ViewChild('animationContainer') animationContainer!: ElementRef;

  ngOnInit(): void {
    this.logoBig = true;
    this.checkWindowSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.checkWindowSize();
  }

  @HostListener('window:load', ['$event'])
  onLoad(event: Event): void {
    if (this.windowWidth <= 1100) {
      this.mobileActive = true;
      this.mobileAnimation = true;
    } else {
      this.desktopAnimation = true;
    }
    this.checkWindowSize();
  }

  private checkWindowSize(): void {
    this.windowWidth = this.renderer.parentNode(
      this.el.nativeElement
    ).ownerDocument.defaultView.innerWidth;
    if (this.windowWidth <= 1100) {
      this.showDesktop = false;
      this.showMobile = true;
      this.logoBig = false;
    } else {
      this.showDesktop = true;
      this.showMobile = false;
    }
  }
}
