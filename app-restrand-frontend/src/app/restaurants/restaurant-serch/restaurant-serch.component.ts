import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, switchMap} from 'rxjs/operators';
import {RestaurantsService} from '../restaurants.service';
export interface AutocompleteResponse{
  description: string;
  place_id: string;
}
@Component({
  selector: 'app-restaurant-serch',
  templateUrl: './restaurant-serch.component.html',
  styleUrls: ['./restaurant-serch.component.scss']
})
export class RestaurantSerchComponent implements OnInit {
  myControl = new FormControl('');
  options: AutocompleteResponse[] = [];
  filteredOptions: Observable<AutocompleteResponse[]> = new Observable<AutocompleteResponse[]>();

  constructor(private restaurantsService: RestaurantsService) { }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      switchMap(value => {
        return this._filter(value || '');
      })
    );
  }

  displayFn(query: AutocompleteResponse){
    return query && query.description ? query.description : '';
  }
  private _filter(query: string): Observable<AutocompleteResponse[]> {
    const filterValue = query;
    console.log(filterValue);
    return this.restaurantsService.getRestaurantsAutocompleOptions(filterValue);
  }
  selectOption(option: any): void {
    this.restaurantsService.getRestaurantsSerchDetasils(option.value.place_id).subscribe(data =>
      console.log(data)
    );

  }

}
