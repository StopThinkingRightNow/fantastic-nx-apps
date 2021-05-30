import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rs-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products = [
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
  constructor() { }

  ngOnInit(): void {
  }

}
