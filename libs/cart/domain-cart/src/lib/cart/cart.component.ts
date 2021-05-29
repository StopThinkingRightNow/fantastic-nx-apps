import { Component, Inject, OnInit } from '@angular/core';
import { PageLayoutService } from '@rs-form/domain-shell';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  showSideBar = false;
  constructor(@Inject(PageLayoutService) private pageLayoutService: PageLayoutService) { }

  ngOnInit(): void {
  }

  openSidebar() {
    this.showSideBar = !this.showSideBar;
    this.pageLayoutService.setSidebar(this.showSideBar);
  }

}
