import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';
import {Credinals} from '../credinals';
import {map} from 'rxjs/operators';
import {LoginShareService} from "../login-share.service";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  get user(): Credinals {
    return this._user;
  }

  set user(value: Credinals) {
    this._user = value;
  }
  private _user: Credinals = { username: '', password: ''};
  constructor(private usersService: UsersService, private loginShareService: LoginShareService) {}

  ngOnInit(): void {
  }
 onLogin(): void{
    this.usersService
      .login(this._user)
      .subscribe(
        (response) => {
          this.loginShareService.sendMessage(response.status);
        }
      );
 }
}
