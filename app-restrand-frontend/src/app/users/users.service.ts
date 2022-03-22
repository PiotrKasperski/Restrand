import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Credinals} from './credinals';
import {Observable} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {TokenService} from './token.service';
import {error} from 'protractor';
export interface LoginResponse{
  status: string;
  access_token: string|null|undefined;
  response: any|null|undefined;
}
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  login(credinals: Credinals): Observable<LoginResponse|any>{
    return this.http.post<any>('/api/users/login', credinals).pipe(map((response) => {
        this.tokenService.setToken(response.access_token);
        return {status: 'success', access_token: this.tokenService.getToken()};
    }));
  }
  register(credinals: Credinals): Observable<string>{
    return this.http.post<any>('/api/users/register', credinals).pipe(map((response) => {
      return 'success';
    }));
  }
}
