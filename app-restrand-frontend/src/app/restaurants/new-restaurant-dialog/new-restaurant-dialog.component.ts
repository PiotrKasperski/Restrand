import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {Restaurant} from '../restaurant';
import {RestaurantsService} from '../restaurants.service';

@Component({
  selector: 'app-new-restaurant-dialog',
  templateUrl: './new-restaurant-dialog.component.html',
  styleUrls: ['./new-restaurant-dialog.component.scss']
})
export class NewRestaurantDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<NewRestaurantDialogComponent>, private restaurantsService: RestaurantsService) { }
  newRestaurant: Restaurant = {
    name: '',
    id: +'',
    details: {
      address: {
        street: '',
       street_number: 0,
       city: ''},
     url: '',
     website: '',
     rest: '',
   }};
  ngOnInit(): void {
  }
  onAddButtonClick(): void{
    console.log(this.newRestaurant);
    this.restaurantsService.addRestaurant(this.newRestaurant).subscribe(response => {
      this.dialogRef.close(response);
    });
  }

  onCloseButtonClick(): void {
    this.dialogRef.close(this.newRestaurant);
  }

  onRestaurantSelect(selectedRestaurant: Restaurant): void {
    this.newRestaurant = selectedRestaurant;
  }
}
