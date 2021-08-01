import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageLayoutService } from '@rs-form/domain-shell';

@Component({
  selector: 'rs-apps-app-container',
  templateUrl: './app-container.component.html',
  styleUrls: ['./app-container.component.scss']
})
export class AppContainerComponent implements OnInit {
  
  panelClosed = false;

  folders: any[] = [
    {
      name: 'Thumbnail',  
      label: 'Thumbnail',
      type: 'img'
    },
    {
      name: 'First name',
      label: 'First name'
    },
    {
      name: 'Last name',
      label: 'Last name',
    },
    {
      name: 'username',
      label: 'Username',
    },
    {
      name: 'siva@gmail.com',
      label: 'Email',
    },
    {
      name: 'siva@gmail.com',
      label: 'password',
    },
    {
      name: '6.8/10.0 GB (68%)',
      label: 'Data used',
    },
    {
      name: 'Yes',
      label: 'Authorized',
    }
  ];

  showSideNav = false;
  constructor(@Inject(PageLayoutService) private pageLayoutService: PageLayoutService, private router: Router) { }

  ngOnInit(): void {
    this.openSidebar();
  }

  openSidebar() {
    this.showSideNav = !this.showSideNav;
    this.pageLayoutService.toggleSideNav(this.showSideNav);
  }

  navigateToCart() {
    this.router.navigateByUrl('/orders');
  }

  navigateToUserProfile() {

  }

  onPanelClosed() {
    this.panelClosed = !this.panelClosed
  }

}
