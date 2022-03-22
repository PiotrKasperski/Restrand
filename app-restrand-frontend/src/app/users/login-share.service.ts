import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginShareService {
  private messageSource = new Subject<string>();
  messageSent$ = this.messageSource.asObservable();
  sendMessage(message: string): void{
    this.messageSource.next(message);
  }
  constructor() { }
}
