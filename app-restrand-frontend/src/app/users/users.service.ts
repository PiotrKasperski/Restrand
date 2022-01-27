import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Credinals} from './credinals';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {TokenService} from "./token.service";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  login(credinals: Credinals): Observable<string|null>{
    return this.http.post<any>('/api/users/login', credinals).pipe(map((response) => {
      this.tokenService.setToken(response.access_token);
      return this.tokenService.getToken();
    }));
  }
}
