import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonWorkspaceComponent } from './button-workspace.component';

describe('ButtonWorkspaceComponent', () => {
  let component: ButtonWorkspaceComponent;
  let fixture: ComponentFixture<ButtonWorkspaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonWorkspaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonWorkspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
