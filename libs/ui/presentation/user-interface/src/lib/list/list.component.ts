import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductInterface } from '@rs-form/common';

@Component({
  selector: 'rs-apps-ui-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input()
  items: ProductInterface[];

  @Output()
  onItemClick = new EventEmitter<any>();
  

  constructor() { }

  ngOnInit(): void {
  }

}
