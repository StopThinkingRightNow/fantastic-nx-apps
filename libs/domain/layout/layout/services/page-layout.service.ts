import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PageLayoutService {
  private sideNav = new BehaviorSubject(false);
  private sideBar = new BehaviorSubject(false);
  sideNav$: Observable<boolean>;
  sideBar$: Observable<boolean>;

  constructor() {
    this.sideBar$ = this.sideBar.asObservable();
    this.sideNav$ = this.sideNav.asObservable();
  }

  toggleSideNav(value: boolean) {
    this.sideNav.next(value);
  }

  toggleSidebar(value: boolean) {
    this.sideBar.next(value);
  }
}
