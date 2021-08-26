import { Component, OnInit } from '@angular/core';
import {Restaurant} from "../restaurant";
import {MatDialogRef} from "@angular/material/dialog";
import {RestaurantsService} from "../restaurants.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-random-restaurant-dialog',
  templateUrl: './random-restaurant-dialog.component.html',
  styleUrls: ['./random-restaurant-dialog.component.scss']
})
export class RandomRestaurantDialogComponent implements OnInit {
  restaurant: Observable<any>=this.restaurantService.getRandomRestaurant();

  constructor(private restaurantService: RestaurantsService,public dialogRef: MatDialogRef<RandomRestaurantDialogComponent>) { }

  ngOnInit(): void {
  }

  onCloseClick() {
    this.dialogRef.close(this.restaurant);
  }
}
