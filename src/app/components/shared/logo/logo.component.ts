import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss',
})
export class LogoComponent {
  position: number = 1;
  img = [
    '../../assets/img/logo-mobile.svg',
    '../../assets/img/logo-desktop.svg',
  ];

  windowWidth: number = 0;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.windowWidth = window.innerWidth;
    if (this.windowWidth <= 1100) {
      this.position = 0;
    } else {
      this.position = 1;
    }
  }
}
