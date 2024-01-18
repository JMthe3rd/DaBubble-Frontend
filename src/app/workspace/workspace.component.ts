import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from "@angular/router";

@Component({
  selector: 'app-workspace',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './workspace.component.html',
  styleUrl: './workspace.component.scss'
})
export class WorkspaceComponent implements OnInit {
  showChannels: boolean = true;
  showDMs: boolean = true;
  constructor(
    private router: Router
  ) {}



  // ########DUMMY#################DUMMY#################DUMMY#########
  // ########DUMMY#################DUMMY#################DUMMY#########

  user!: {
    channels: Array<{ name: string }>,
    directMessages: Array<any> // Ersetzen Sie 'any' durch einen passenden Typ
  };
  channels!: Array<{ name: string }>;



  ngOnInit(){
    this.user = {
      channels: [
        {
          name: "Entwicklerteam",
        },
        {
          name: "Marketing",
        },
        {
          name: "Vertrieb",
        },
      ],
      directMessages: [
        {
          withUser: {
            firstName: "Daniele",
            lastName: "Meyer",
            imageUrl: "path/to/daniele_meyer.jpg"
          },
          messageHistory: [
            { sender: "Daniele Meyer", message: "Hallo, wie geht's?", receiver: this.user,  timestamp: "2024-01-18T09:00:00" },
            { sender: this.user, message: "Mir geht's gut, danke!", receiver: "Daniele Meyer", timestamp: "2024-01-18T09:05:00" }
          ]
        }
      ]
    }

    this.channels = this.user.channels;
  }
  
}
