import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendMailPwComponent } from './send-mail-pw.component';

describe('SendMailPwComponent', () => {
  let component: SendMailPwComponent;
  let fixture: ComponentFixture<SendMailPwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SendMailPwComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SendMailPwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
