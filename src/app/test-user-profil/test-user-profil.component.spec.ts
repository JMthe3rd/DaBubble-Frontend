import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestUserProfilComponent } from './test-user-profil.component';

describe('TestUserProfilComponent', () => {
  let component: TestUserProfilComponent;
  let fixture: ComponentFixture<TestUserProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestUserProfilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestUserProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
