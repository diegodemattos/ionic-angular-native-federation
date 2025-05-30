import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SharedData } from './state-lib.tokens';

@Injectable({
  providedIn: 'root'
})
export class SharedStateService {
  private state$: BehaviorSubject<SharedData>;

  constructor() {
    this.state$ = new BehaviorSubject({});
  }

  getState() {
    return this.state$.asObservable();
  }

  setState(state: SharedData) {
    this.state$.next(state);
  }
}