import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCardAComponent } from './profile-card-a.component';

describe('ProfileCardAComponent', () => {
  let component: ProfileCardAComponent;
  let fixture: ComponentFixture<ProfileCardAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileCardAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileCardAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
