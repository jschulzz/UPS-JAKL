import { Injectable } from '@angular/core';
import { BehaviorSubject } from '../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginStateService {
  public state: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() {}
}
