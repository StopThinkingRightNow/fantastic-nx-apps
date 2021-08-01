import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  cartStore = '../../../../../../database/cart.json';

  constructor() { }
}
