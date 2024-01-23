import {
  Component,
  ElementRef,
  HostListener,
  Renderer2,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
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
  encapsulation: ViewEncapsulation.None,
})
export class ChannelEditComponent {
  user: any = {
    id: 1,
    fullName: 'Name LastName',
    img: '../../assets/img/person.svg',
    isOnline: true,
  };
  users: any[] = [
    {
      id: 2,
      fullName: 'Admir Bajric',
      img: '../../assets/img/avatar1.svg',
      isOnline: true,
    },
    {
      id: 3,
      fullName: 'Selina Karlin',
      img: '../../assets/img/avatar2.svg',
      isOnline: false,
    },
    {
      id: 4,
      fullName: 'Julius Marecek',
      img: '../../assets/img/avatar3.svg',
      isOnline: false,
    },
    {
      id: 2,
      fullName: 'Admir Bajric',
      img: '../../assets/img/avatar1.svg',
      isOnline: true,
    },
    {
      id: 3,
      fullName: 'Selina Karlin',
      img: '../../assets/img/avatar2.svg',
      isOnline: false,
    },
    {
      id: 4,
      fullName: 'Julius Marecek',
      img: '../../assets/img/avatar3.svg',
      isOnline: false,
    },
  ];
  ifMobileView: boolean = true;
  windowWidth: number = 0;
  ifUserCreateChannel: boolean = true;
  channelName: string = 'Channel name';
  channelNameCopy = this.channelName;
  channelNameToggle: boolean = true;
  channelDescriptionToggle: boolean = true;
  channelNameOnFocus: boolean = false;
  channelDescriptionOnFocus: boolean = false;
  createdBy: string = 'Noah Braun';
  channelDescription: string =
    'Dieser Channel ist für alles rund um #dfsdf vorgesehen. Hier kannst du zusammen mit deinem Team Meetings abhalten, Dokumente teilen und Entscheidungen treffen.';

  @ViewChild('channelNameInput') channelNameInput!: ElementRef;
  @ViewChild('channelDescriptionInput') channelDescriptionInput!: ElementRef;

  constructor(
    private elementRef: ElementRef,
    public dialogRef: MatDialogRef<ChannelEditComponent>,
    private renderer: Renderer2
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
      this.elementRef.nativeElement
    ).ownerDocument.defaultView.innerWidth;
    if (this.windowWidth <= 1100) {
      this.ifMobileView = true;
    } else {
      this.ifMobileView = false;
    }
  }

  channelDelete() {}

  leaveChannel() {}

  editName() {
    this.channelNameToggle = !this.channelNameToggle;
    this.channelNameOnFocus = true;

    if (!this.channelNameToggle) {
      setTimeout(() => {
        this.channelNameInput.nativeElement.focus();
      });
    }
  }

  saveName() {
    this.channelNameOnFocus = false;
    this.channelNameToggle = !this.channelNameToggle;
    this.channelNameCopy = this.channelName;
  }

  editDescription() {
    this.channelDescriptionToggle = !this.channelDescriptionToggle;
    this.channelDescriptionOnFocus = true;

    if (!this.channelDescriptionToggle) {
      setTimeout(() => {
        this.channelDescriptionInput.nativeElement.focus();
      });
    }
  }

  saveDescription() {
    this.channelDescriptionOnFocus = false;
    this.channelDescriptionToggle = !this.channelDescriptionToggle;
  }

  onNoClick() {
    this.dialogRef.close();
  }
}
