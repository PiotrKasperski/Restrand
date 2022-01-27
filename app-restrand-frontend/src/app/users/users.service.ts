import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Credinals} from "./credinals";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  login(credinals: Credinals): Observable<Credinals>{
    return this.http.post<Credinals>('/api/users/login', credinals);
  }
}
