import { Component, OnInit } from '@angular/core';
import {Credinals} from '../credinals';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  get user(): Credinals {
    return this._user;
  }
  set user(value: Credinals) {
    this._user = value;
  }
 private _user: Credinals = {username: '', password: ''};

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
  }
  onRegister(): void{
    this.usersService.register(this.user).subscribe((response) => {
      if (response === 'success') {
        this.usersService.login(this.user).subscribe();
      }
    });
  }
}
