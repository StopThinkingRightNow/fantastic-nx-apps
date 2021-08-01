import { Component, OnInit } from '@angular/core';
import { CartService, ProductsService } from '@rs-apps/data-store';
@Component({
  selector: 'rs-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: any = [];
  constructor(private productsService: ProductsService, private cartService: CartService) { }

  ngOnInit(): void {
    this.products = this.productsService.getDummyProducts();
  }

  onProductClick(selectedProduct) {

  }

  onAddToCart(selectedProduct) {
      this.cartService.addToCart(selectedProduct);
      console.log(this.cartService.getCartDetails());
  }

}
