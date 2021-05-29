import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PageLayoutService {
  private ready = new BehaviorSubject(false);
  ready$: Observable<boolean>;

  constructor() {
    this.ready$ = this.ready.asObservable();
  }

  setSidebar(value) {
    this.ready.next(value);
  }

  removeSidebar(value) {
    this.ready.next(value);
  }
}
