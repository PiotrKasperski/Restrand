import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {LoginShareService} from '../login-share.service';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss']
})
export class UserDialogComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  constructor(public dialogRef: MatDialogRef<UserDialogComponent>, private loginShareService: LoginShareService) {
    this.subscription = this.loginShareService.messageSent$.subscribe((message) => {
      if (message === 'success') { this.dialogRef.close(); } //TODO: errorhandling
      //TODO: wyświetlanie snackbara z statussem
    });
  }

  ngOnInit(): void {
  }
  onCloseButtonClick(): void {
    this.dialogRef.close();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
