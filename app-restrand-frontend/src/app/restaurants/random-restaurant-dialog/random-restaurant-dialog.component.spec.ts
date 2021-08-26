import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomRestaurantDialogComponent } from './random-restaurant-dialog.component';

describe('RandomRestaurantDialogComponent', () => {
  let component: RandomRestaurantDialogComponent;
  let fixture: ComponentFixture<RandomRestaurantDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomRestaurantDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomRestaurantDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
