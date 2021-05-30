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
  onItemClick = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit(): void {
  }

}
