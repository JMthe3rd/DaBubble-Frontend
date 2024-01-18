import { Component } from '@angular/core';
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
  ifUserAcc: boolean = false;
  userImg: string = '../../assets/img/person.svg';
  userFullName: string = 'Name LastName';
  userEmail: string = 'email@gmail.com';
  constructor(public dialogRef: MatDialogRef<ProfileViewComponent>) {}

  onNoClick() {
    this.dialogRef.close();
  }
}
