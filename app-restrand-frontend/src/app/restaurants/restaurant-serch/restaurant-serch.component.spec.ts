import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantSerchComponent } from './restaurant-serch.component';

describe('RestaurantSerchComponent', () => {
  let component: RestaurantSerchComponent;
  let fixture: ComponentFixture<RestaurantSerchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantSerchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantSerchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
