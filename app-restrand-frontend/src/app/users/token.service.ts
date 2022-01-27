import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }


  setToken(token: string): void{
    if (token) {
      localStorage.setItem('token', token);
    }
  }
  getToken(): string|null{
    return localStorage.getItem('token');
}
}
