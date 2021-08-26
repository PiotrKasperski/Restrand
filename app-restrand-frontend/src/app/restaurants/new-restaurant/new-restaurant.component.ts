import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {NewRestaurantDialogComponent} from "../new-restaurant-dialog/new-restaurant-dialog.component";

@Component({
  selector: 'app-new-restaurant',
  templateUrl: './new-restaurant.component.html',
  styleUrls: ['./new-restaurant.component.scss']
})
export class NewRestaurantComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(){
    const dialogRef= this.dialog.open(NewRestaurantDialogComponent,{
      width:'600px',
    } )
    dialogRef.afterClosed().subscribe((result)=>{
      console.log(result);
    })

  }

}
