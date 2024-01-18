import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { ProfileViewComponent } from '../profile-view/profile-view.component';

@Component({
  selector: 'app-test-user-profil',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule,
    MatCardModule,
    CommonModule,
    RouterLink,
  ],
  templateUrl: './test-user-profil.component.html',
  styleUrl: './test-user-profil.component.scss',
})
export class TestUserProfilComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(ProfileViewComponent);
  }
}
