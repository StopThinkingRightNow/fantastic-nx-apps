import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '@rs-apps/data-store';
import { PageLayoutService } from '@rs-form/domain-shell';

@Component({
  selector: 'rs-apps-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'rs-client';
  cartCount: any = '';
  
  showSideNav = false;
  constructor(private cartService: CartService, @Inject(PageLayoutService) private pageLayoutService: PageLayoutService, private router: Router) { }

  ngOnInit(): void {
    this.openSidebar();
  }

  openSidebar() {
    this.showSideNav = !this.showSideNav;
    this.pageLayoutService.toggleSideNav(this.showSideNav);
  }

  navigateToCart() {
    this.router.navigateByUrl('/cart/cart-list');
  }

  navigateToUserProfile() {

  }

  navigateToOrders() {
    this.router.navigateByUrl('/orders');
  }


  navigateToProducts() {
    this.router.navigateByUrl('/products');
  }

  getCartCount(): number {
    this.cartCount = this.cartService.getCartDetails().cart.length;
    return this.cartCount;
  }
}
