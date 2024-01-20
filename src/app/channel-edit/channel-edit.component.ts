import { Component, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { InputComponent } from '../input/input.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-channel-edit',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatCardModule,
    MatIconModule,
    InputComponent,
  ],
  templateUrl: './channel-edit.component.html',
  styleUrl: './channel-edit.component.scss',
})
export class ChannelEditComponent {
  ifUserCreate: boolean = false;
  channelName: string = 'Channel name';
  channelNameCopy = this.channelName;
  channelEditShow: boolean = true;

  constructor(
    private elementRef: ElementRef,
    public dialogRef: MatDialogRef<ChannelEditComponent>
  ) {}

  channelDelete() {}

  leaveChannel() {}

  editName() {
    this.channelEditShow = !this.channelEditShow;
  }

  onNoClick() {
    this.dialogRef.close();
  }
}
