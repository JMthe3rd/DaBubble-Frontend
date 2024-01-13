import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { User } from '../models/user.class'; //

@Component({
  selector: 'app-select-avatar',
  standalone: true,
  imports: [],
  templateUrl: './select-avatar.component.html',
  styleUrl: './select-avatar.component.scss',
})
export class SelectAvatarComponent implements OnInit {
  user: User | null = null;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.currentUser.subscribe((user) => {
      this.user = user;
    });
  }
}
