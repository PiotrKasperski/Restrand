import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewRestaurantComponent } from './new-restaurant/new-restaurant.component';
import {MatButtonModule} from "@angular/material/button";
import { NewRestaurantDialogComponent } from './new-restaurant-dialog/new-restaurant-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {RestaurantsService} from "./restaurants.service";
import { RestaurantFormComponent } from './restaurant-form/restaurant-form.component';
import {FormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { RandomRestaurantComponent } from './random-restaurant/random-restaurant.component';
import { RandomRestaurantDialogComponent } from './random-restaurant-dialog/random-restaurant-dialog.component';
import {MatCardModule} from "@angular/material/card";
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";



@NgModule({
  declarations: [
    NewRestaurantComponent,
    NewRestaurantDialogComponent,
    RestaurantFormComponent,
    RandomRestaurantComponent,
    RandomRestaurantDialogComponent,
    RestaurantListComponent
  ],
  exports: [
    NewRestaurantComponent,
    RandomRestaurantComponent,
    RestaurantListComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule
  ],
  providers:[RestaurantsService]
})
export class RestaurantsModule { }
