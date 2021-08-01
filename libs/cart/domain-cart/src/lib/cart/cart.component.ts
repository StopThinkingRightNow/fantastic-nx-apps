import { Component, Inject, OnInit } from '@angular/core';
import { CartService } from '@rs-apps/data-store';
import { PageLayoutService } from '@rs-form/domain-shell';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  showSideBar = false;
  cartList: any = [];
  constructor(private cartService: CartService, @Inject(PageLayoutService) private pageLayoutService: PageLayoutService) { }

  ngOnInit(): void {
    this.cartList = this.cartService.getCartDetails();
  }

  openSidebar() {
    this.showSideBar = !this.showSideBar;
    this.pageLayoutService.toggleSidebar(this.showSideBar);
  }

}
