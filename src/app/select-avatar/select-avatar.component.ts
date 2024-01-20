import { Component, HostListener, Renderer2, ElementRef } from '@angular/core';
import { DataService } from '../data.service';
import { User } from '../models/user.class'; //
import { LogoComponent } from '../logo/logo.component';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-select-avatar',
  standalone: true,
  imports: [
    LogoComponent,
    MatCardModule,
    CommonModule,
    RouterLink,
    MatProgressSpinnerModule,
  ],
  templateUrl: './select-avatar.component.html',
  styleUrl: './select-avatar.component.scss',
})
export class SelectAvatarComponent {
  user: User | null = null;
  selectedFile: File | null = null;
  fullName: string = '';
  personImg = '../../assets/img/person.svg';
  showParagraph: boolean = true;
  windowWidth: number = 0;
  isGerman: boolean = false;
  spinnerActive: boolean = false;
  imgSelected: boolean = false;
  avatars = [
    '../../assets/img/avatar1.svg',
    '../../assets/img/avatar2.svg',
    '../../assets/img/avatar3.svg',
    '../../assets/img/avatar4.svg',
    '../../assets/img/avatar5.svg',
    '../../assets/img/avatar6.svg',
  ];

  constructor(
    private dataService: DataService,
    private renderer: Renderer2,
    private el: ElementRef
  ) {}

  ngOnInit(): void {
    this.checkWindowSize();
    this.dataService.currentUser.subscribe((user) => {
      this.user = user;
      this.fullName = user ? user.fullName : 'Test User';
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.checkWindowSize();
  }

  @HostListener('window:load', ['$event'])
  onLoad(event: Event): void {
    this.checkWindowSize();
  }

  private checkWindowSize(): void {
    this.windowWidth = this.renderer.parentNode(
      this.el.nativeElement
    ).ownerDocument.defaultView.innerWidth;
    if (this.windowWidth <= 1100) {
      this.showParagraph = true;
      this.isGerman = false;
    } else {
      this.showParagraph = false;
      this.isGerman = true;
    }
  }

  imageClicked(index: number) {
    this.imgSelected = true;
    this.personImg = this.avatars[index];
    let avatar = this.personImg.split('../../assets/img/')[1];
    if (this.user) {
      this.user.avatar = avatar;
    }
  }

  registerUser() {
    // Check if avatar or image has been uploaded (this.user.avatar) not undefined and then send this.user to database and redirect to home component.
    if (this.user) {
      if (this.user != undefined) {
        this.spinnerActive = true;
        // Send this.user to database and redirect to home if success.
        // Set spinner to false
      }
    }
  }
}
