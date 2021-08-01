import { Injectable } from '@angular/core';

// export interface ProductInterface {
//   id: string,
//   details: any,
// }

export interface ProductListInterface {
  id: string,
  details: any;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productsStore: ProductListInterface[] = [];

  constructor() { }

  getCartDetails() {
    return this.productsStore;
  }

  getDummyProducts() {
    return [
      {
        name: 'Product Name',
        image: './assets/images/fahd-khan-mrFdBdTlElk-unsplash.jpg',
        price: 'Price: 10$'
      },
      {
        name: 'Product Name',
        image: './assets/images/fahd-khan-mrFdBdTlElk-unsplash.jpg',
        price: 'Price: 10$'
      },
      {
        name: 'Product Name',
        image: './assets/images/fahd-khan-mrFdBdTlElk-unsplash.jpg',
        price: 'Price: 10$'
      },
      {
        name: 'Product Name',
        image: './assets/images/fahd-khan-mrFdBdTlElk-unsplash.jpg',
        price: 'Price: 10$'
      },
      {
        name: 'Product Name',
        image: './assets/images/fahd-khan-mrFdBdTlElk-unsplash.jpg',
        price: 'Price: 10$'
      },
      {
        name: 'Product Name',
        image: './assets/images/fahd-khan-mrFdBdTlElk-unsplash.jpg',
        price: 'Price: 10$'
      },
      {
        name: 'Product Name',
        image: './assets/images/fahd-khan-mrFdBdTlElk-unsplash.jpg',
        price: 'Price: 10$'
      },
      {
        name: 'Product Name',
        image: './assets/images/fahd-khan-mrFdBdTlElk-unsplash.jpg',
        price: 'Price: 10$'
      },
      {
        name: 'Product Name',
        image: './assets/images/fahd-khan-mrFdBdTlElk-unsplash.jpg',
        price: 'Price: 10$'
      },
      {
        name: 'Product Name',
        image: './assets/images/fahd-khan-mrFdBdTlElk-unsplash.jpg',
        price: 'Price: 10$'
      },
      {
        name: 'Product Name',
        image: './assets/images/fahd-khan-mrFdBdTlElk-unsplash.jpg',
        price: 'Price: 10$'
      },
      {
        name: 'Product Name',
        image: './assets/images/fahd-khan-mrFdBdTlElk-unsplash.jpg',
        price: 'Price: 10$'
      },
      {
        name: 'Product Name',
        image: './assets/images/fahd-khan-mrFdBdTlElk-unsplash.jpg',
        price: 'Price: 10$'
      },
      {
        name: 'Product Name',
        image: './assets/images/fahd-khan-mrFdBdTlElk-unsplash.jpg',
        price: 'Price: 10$'
      },
      {
        name: 'Product Name',
        image: './assets/images/fahd-khan-mrFdBdTlElk-unsplash.jpg',
        price: 'Price: 10$'
      },
      {
        name: 'Product Name',
        image: './assets/images/fahd-khan-mrFdBdTlElk-unsplash.jpg',
        price: 'Price: 10$'
      },
      {
        name: 'Product Name',
        image: './assets/images/fahd-khan-mrFdBdTlElk-unsplash.jpg',
        price: 'Price: 10$'
      },
      {
        name: 'Product Name',
        image: './assets/images/fahd-khan-mrFdBdTlElk-unsplash.jpg',
        price: 'Price: 10$'
      },
      {
        name: 'Product Name',
        image: './assets/images/fahd-khan-mrFdBdTlElk-unsplash.jpg',
        price: 'Price: 10$'
      },
      {
        name: 'Product Name',
        image: './assets/images/fahd-khan-mrFdBdTlElk-unsplash.jpg',
        price: 'Price: 10$'
      },
      {
        name: 'Product Name',
        image: './assets/images/fahd-khan-mrFdBdTlElk-unsplash.jpg',
        price: 'Price: 10$'
      },
      {
        name: 'Product Name',
        image: './assets/images/fahd-khan-mrFdBdTlElk-unsplash.jpg',
        price: 'Price: 10$'
      },
      {
        name: 'Product Name',
        image: './assets/images/fahd-khan-mrFdBdTlElk-unsplash.jpg',
        price: 'Price: 10$'
      },
      {
        name: 'Product Name',
        image: './assets/images/fahd-khan-mrFdBdTlElk-unsplash.jpg',
        price: 'Price: 10$'
      },
      {
        name: 'Product Name',
        image: './assets/images/fahd-khan-mrFdBdTlElk-unsplash.jpg',
        price: 'Price: 10$'
      },
      {
        name: 'Product Name',
        image: './assets/images/fahd-khan-mrFdBdTlElk-unsplash.jpg',
        price: 'Price: 10$'
      },
      {
        name: 'Product Name',
        image: './assets/images/fahd-khan-mrFdBdTlElk-unsplash.jpg',
        price: 'Price: 10$'
      },
      {
        name: 'Product Name',
        image: './assets/images/fahd-khan-mrFdBdTlElk-unsplash.jpg',
        price: 'Price: 10$'
      },
      {
        name: 'Product Name',
        image: './assets/images/fahd-khan-mrFdBdTlElk-unsplash.jpg',
        price: 'Price: 10$'
      },
      {
        name: 'Product Name',
        image: './assets/images/fahd-khan-mrFdBdTlElk-unsplash.jpg',
        price: 'Price: 10$'
      },
      {
        name: 'Product Name',
        image: './assets/images/fahd-khan-mrFdBdTlElk-unsplash.jpg',
        price: 'Price: 10$'
      },
      {
        name: 'Product Name',
        image: './assets/images/fahd-khan-mrFdBdTlElk-unsplash.jpg',
        price: 'Price: 10$'
      },
      {
        name: 'Product Name',
        image: './assets/images/fahd-khan-mrFdBdTlElk-unsplash.jpg',
        price: 'Price: 10$'
      },
      {
        name: 'Product Name',
        image: './assets/images/fahd-khan-mrFdBdTlElk-unsplash.jpg',
        price: 'Price: 10$'
      },
      {
        name: 'Product Name',
        image: './assets/images/fahd-khan-mrFdBdTlElk-unsplash.jpg',
        price: 'Price: 10$'
      },
      {
        name: 'Product Name',
        image: './assets/images/fahd-khan-mrFdBdTlElk-unsplash.jpg',
        price: 'Price: 10$'
      },
      {
        name: 'Product Name',
        image: './assets/images/fahd-khan-mrFdBdTlElk-unsplash.jpg',
        price: 'Price: 10$'
      },
      {
        name: 'Product Name',
        image: './assets/images/fahd-khan-mrFdBdTlElk-unsplash.jpg',
        price: 'Price: 10$'
      },
    ];
  }
}
