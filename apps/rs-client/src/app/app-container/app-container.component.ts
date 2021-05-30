import { Component, Inject, OnInit } from '@angular/core';
import { PageLayoutService } from '@rs-form/domain-shell';

@Component({
  selector: 'rs-apps-app-container',
  templateUrl: './app-container.component.html',
  styleUrls: ['./app-container.component.scss']
})
export class AppContainerComponent implements OnInit {

  showSideNav = false;
  constructor(@Inject(PageLayoutService) private pageLayoutService: PageLayoutService) { }

  ngOnInit(): void {
  }

  openSidebar() {
    this.showSideNav = !this.showSideNav;
    this.pageLayoutService.toggleSideNav(this.showSideNav);
  }

}
