import { Injectable } from '@angular/core';

export interface CartInterface {
  id: string,
  product: any,
}

export interface UserCartInterface {
  userId?: string,
  cart?: CartInterface[],
  wishList?: CartInterface[]
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartStore: UserCartInterface = { cart: []};

  constructor() { }

  getCartDetails() {
    return this.cartStore;
  }

  addToCart(product: CartInterface) {
    this.cartStore.cart.push(product);
  }

  removeFromCart(cartId: CartInterface) {
    const removeProduct: any = this.cartStore.cart.find((userCart: any) => userCart.cart.id === cartId);
    this.cartStore.cart = this.cartStore.cart.filter((obj: any) => obj.cart.id !== removeProduct.cart.id);
  }

  addToWishCart(product: CartInterface) {
    this.cartStore.wishList.push(product);;
  }
}
