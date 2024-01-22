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
import { ChannelEditComponent } from '../channel-edit/channel-edit.component';

@Component({
  selector: 'app-for-test',
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
  templateUrl: './for-test.component.html',
  styleUrl: './for-test.component.scss',
})
export class ForTestComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(ProfileViewComponent);
  }

  openChannelDialog() {
    this.dialog.open(ChannelEditComponent, {
      autoFocus: false,
    });
  }
}
