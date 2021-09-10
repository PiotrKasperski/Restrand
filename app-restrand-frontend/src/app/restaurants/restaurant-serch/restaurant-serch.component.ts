import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, startWith, switchMap} from 'rxjs/operators';
import {RestaurantsService} from '../restaurants.service';
import {Restaurant} from '../restaurant';
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
  @Output() onRestaurantSelect = new EventEmitter<Restaurant>();
  myControl = new FormControl('');
  options: AutocompleteResponse[] = [];
  filteredOptions: Observable<AutocompleteResponse[]> = new Observable<AutocompleteResponse[]>();

  constructor(private restaurantsService: RestaurantsService) { }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap(filterValue => {
        return filterValue === '' ? [] : this.restaurantsService.getRestaurantsAutocompleOptions(filterValue);
      })
    );
  }

  displayFn(query: AutocompleteResponse){
    return query && query.description ? query.description : '';
  }

  selectOption(option: any): void {
    this.restaurantsService.getRestaurantsSerchDetasils(option.value.place_id).subscribe(data => {
      console.log(data);
      this.onRestaurantSelect.emit(data);
      }
    );

  }

}
