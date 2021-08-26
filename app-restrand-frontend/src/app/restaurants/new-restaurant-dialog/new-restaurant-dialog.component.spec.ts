import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRestaurantDialogComponent } from './new-restaurant-dialog.component';

describe('NewRestaurantDialogComponent', () => {
  let component: NewRestaurantDialogComponent;
  let fixture: ComponentFixture<NewRestaurantDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewRestaurantDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRestaurantDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
