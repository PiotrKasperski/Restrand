import { Component, OnInit } from '@angular/core';
import {RestaurantsService} from "../restaurants.service";

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss']
})
export class RestaurantListComponent implements OnInit {

  constructor(private restaurantsService:RestaurantsService) { }
restaurants = this.restaurantsService.getAllRestaurants();
  ngOnInit(): void {
  }

}
