import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoMiddleComponent } from './logo-middle.component';

describe('LogoMiddleComponent', () => {
  let component: LogoMiddleComponent;
  let fixture: ComponentFixture<LogoMiddleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoMiddleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogoMiddleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
