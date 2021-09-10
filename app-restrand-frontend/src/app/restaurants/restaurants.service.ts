import { Injectable } from '@angular/core';
import {Restaurant} from './restaurant';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  constructor(private http: HttpClient) { }

  addRestaurant(newRestaurant: Restaurant): Observable<Restaurant> {
    return this.http.post<Restaurant>('api/restaurants', newRestaurant);
  }

  getRandomRestaurant(): Observable<Object>{
    return this.http.get('/api/random');
  }
  getAllRestaurants(): Observable<any>{
    return this.http.get('/api/restaurants');
  }
  getRestaurantsAutocompleOptions(query: string): Observable<any>{
    return this.http.get('/api/places?q=' + query);
  }
  getRestaurantsSerchDetasils(placeId: string){
    return this.http.get('/api/places/' + placeId);
  }
//  /*  constructor(private http: HttpClient) { }
//   getAll():Observable<Array<Restaurant>>{
//     return this.http.get<Array<Restaurant>>('api/restaurants');
//   }
//   addRestaurant(restaurant:Restaurant){
//   console.log('adding');
//  return this.http.post('api/restaurants', restaurant)
//   }
//   getRandomRestaurant(){
//     return this.http.get('/api/random');
//   }*/
}
