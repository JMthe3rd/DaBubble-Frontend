import { Component } from '@angular/core';
import { LogoComponent } from '../../shared/logo/logo.component';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-impressum',
  standalone: true,
  imports: [LogoComponent, MatCardModule, RouterLink],
  templateUrl: './impressum.component.html',
  styleUrl: './impressum.component.scss',
})
export class ImpressumComponent {}
