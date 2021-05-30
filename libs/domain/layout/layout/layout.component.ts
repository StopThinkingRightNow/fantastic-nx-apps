import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PageLayoutService } from './services/page-layout.service';

@Component({
  selector: 'rs-page-layout-container',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class PageLayoutContainerComponent implements OnInit {
  @Input()
  hasError = false;

  @Input()
  showFooter = false;

  @Input()
  showSideNav = false;

  @Input()
  showHeader = false;

  @Input()
  showSideBar = false;

  showSideBar$: Observable<boolean>;
  showSideNav$: Observable<boolean>;

  constructor(private pageLayoutService: PageLayoutService) {
    this.showSideNav$ = this.pageLayoutService.sideNav$;
    this.showSideBar$ = this.pageLayoutService.sideBar$;
  }

  ngOnInit(): void {}
}
