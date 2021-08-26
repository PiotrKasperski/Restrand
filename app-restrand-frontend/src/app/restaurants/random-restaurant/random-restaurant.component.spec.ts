import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomRestaurantComponent } from './random-restaurant.component';

describe('RandomRestaurantComponent', () => {
  let component: RandomRestaurantComponent;
  let fixture: ComponentFixture<RandomRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomRestaurantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
