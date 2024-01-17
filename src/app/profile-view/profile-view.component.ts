import { Component } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';

@Component({
  selector: 'app-profile-view',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './profile-view.component.html',
  styleUrl: './profile-view.component.scss'
})
export class ProfileViewComponent {

}
