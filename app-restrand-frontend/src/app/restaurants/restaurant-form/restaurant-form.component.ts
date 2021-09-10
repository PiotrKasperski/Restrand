import {Component, forwardRef, OnInit} from '@angular/core';
import {Restaurant} from '../restaurant';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith, switchMap} from 'rxjs/operators';
import {RestaurantsService} from '../restaurants.service';
import {removeSummaryDuplicates} from '@angular/compiler';

@Component({
  selector: 'app-restaurant-form',
  templateUrl: './restaurant-form.component.html',
  styleUrls: ['./restaurant-form.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RestaurantFormComponent),
    multi: true
  }]
})
export class RestaurantFormComponent implements OnInit, ControlValueAccessor {
  private _restaurantForm: Restaurant = {
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

  get restaurant(): Restaurant {
    return this._restaurantForm;
  }

  set restaurant(value: Restaurant) {
    this._restaurantForm = value;

  }
  constructor() {}

  ngOnInit(): void {
  }

  onChange(){}
  onTouch(){}
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  writeValue(obj: Restaurant): void {
    if (obj != null) { this._restaurantForm = obj; }
  }


}
