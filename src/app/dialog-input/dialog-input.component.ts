import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-dialog-input',
  standalone: true,
  imports: [MatIconModule, NgIf],
  templateUrl: './dialog-input.component.html',
  styleUrl: './dialog-input.component.scss'
})
export class DialogInputComponent {
  @Input() placeholder!:string;

  @Input() Tag! :Boolean

  @ViewChild('inputField') inputField! :ElementRef;

}
