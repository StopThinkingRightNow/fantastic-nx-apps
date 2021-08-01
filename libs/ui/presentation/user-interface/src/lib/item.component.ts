import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductInterface } from '@rs-form/common';

@Component({
  selector: 'rs-apps-ui-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input()
  item: ProductInterface;

  @Output()
  itemClick = new EventEmitter<any>();

  @Output()
  addCart = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit(): void {
  }

  onAddCart(item: any) {
    this.addCart.emit(item);
  }

  onItemClick(item: any) {
    this.itemClick.emit(item);
  }

}
