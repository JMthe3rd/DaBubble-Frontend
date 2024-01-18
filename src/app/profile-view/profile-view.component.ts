import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-profile-view',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatCardModule, MatIconModule],
  templateUrl: './profile-view.component.html',
  styleUrl: './profile-view.component.scss',
})
export class ProfileViewComponent {
  isActiveUser: boolean = true;
  ifUserAcc: boolean = true;
  userImg: string = '../../assets/img/person.svg';
  userFullName: string = 'Sofia Müller';
  userEmail: string = 'email@gmail.com';
  mobileView: boolean = false;
  windowWidth: number = 0;
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    public dialogRef: MatDialogRef<ProfileViewComponent>
  ) {}

  ngOnInit(): void {
    this.checkWindowSize();
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
      this.mobileView = true;
    } else {
      this.mobileView = false;
    }
  }

  onNoClick() {
    this.dialogRef.close();
  }

  editAccount() {
    this.onNoClick();
  }
}
