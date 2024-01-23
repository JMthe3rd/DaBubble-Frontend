import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-button-workspace',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button-workspace.component.html',
  styleUrl: './button-workspace.component.scss'
})
export class ButtonWorkspaceComponent {
  @Input() isOpen!: boolean;
  @Output() toggle = new EventEmitter<void>();

  get buttonText(): string {
    return this.isOpen ? 'Workspace-Menü schließen' : 'Workspace-Menü öffnen';
  }

  toggleWorkspace() {
    this.toggle.emit();
  }
}
