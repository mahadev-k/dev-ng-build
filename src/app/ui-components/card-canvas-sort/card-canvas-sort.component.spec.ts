import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCanvasSortComponent } from './card-canvas-sort.component';

describe('CardCanvasSortComponent', () => {
  let component: CardCanvasSortComponent;
  let fixture: ComponentFixture<CardCanvasSortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCanvasSortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCanvasSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
