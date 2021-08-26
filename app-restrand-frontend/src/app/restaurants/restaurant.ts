import {RestaurantDetails} from "./restaurant-details";

export interface Restaurant {
  name: string;
  id: number|null;
  details: RestaurantDetails;
}
