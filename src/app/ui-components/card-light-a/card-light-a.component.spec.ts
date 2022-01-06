import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLightAComponent } from './card-light-a.component';

describe('CardLightAComponent', () => {
  let component: CardLightAComponent;
  let fixture: ComponentFixture<CardLightAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardLightAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardLightAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
