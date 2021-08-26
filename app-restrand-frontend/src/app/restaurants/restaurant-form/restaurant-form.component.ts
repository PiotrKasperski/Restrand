import {Component, forwardRef, OnInit} from '@angular/core';
import {Restaurant} from "../restaurant";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-restaurant-form',
  templateUrl: './restaurant-form.component.html',
  styleUrls: ['./restaurant-form.component.scss'],
  providers:[{
    provide:NG_VALUE_ACCESSOR,
    useExisting:forwardRef(()=>RestaurantFormComponent),
    multi:true
  }]
})
export class RestaurantFormComponent implements OnInit, ControlValueAccessor {
  private _restaurantForm: Restaurant={
    name:'',
    id:+'',
    details: {address: ''}};

  get restaurant(): Restaurant {
    return this._restaurantForm;
  }

  set restaurant(value: Restaurant) {
    this._restaurantForm = value;

  }
  constructor() { }

  ngOnInit(): void {
  }


  onChange(){}
  onTouch(){}
  registerOnChange(fn: any): void {
    this.onChange =fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch=fn;
  }

  writeValue(obj: Restaurant): void {
    if (obj!=null) this._restaurantForm=obj;
  }
}
