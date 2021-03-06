import { Component, OnInit } from '@angular/core';
import {NewRestaurantDialogComponent} from '../../restaurants/new-restaurant-dialog/new-restaurant-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {UserDialogComponent} from '../user-dialog/user-dialog.component';
import {TokenService} from '../token.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(public dialog: MatDialog, private tokenService: TokenService) { }

  ngOnInit(): void {
  }
  openDialog(){
    const dialogRef = this.dialog.open(UserDialogComponent, {
      width: '600px',
    } );
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });

  }
  isLogged(): boolean{
    console.log(this.tokenService.isToken());
    return this.tokenService.isToken();
  }
  logout():void{
    this.tokenService.deleteToken();
  }
}
