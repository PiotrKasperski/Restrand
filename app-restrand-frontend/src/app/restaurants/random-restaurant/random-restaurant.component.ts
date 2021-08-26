import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {RandomRestaurantDialogComponent} from "../random-restaurant-dialog/random-restaurant-dialog.component";

@Component({
  selector: 'app-random-restaurant',
  templateUrl: './random-restaurant.component.html',
  styleUrls: ['./random-restaurant.component.scss']
})
export class RandomRestaurantComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
   const dialogRef = this.dialog.open(RandomRestaurantDialogComponent,{
      width:'600px',
    })
    dialogRef.afterClosed().subscribe(result=>{
      console.log(result);
    })
  }
}
