import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersOrdersModule } from '../../../orders/src';

@NgModule({
  imports: [CommonModule, OrdersOrdersModule],
  exports: [
    OrdersOrdersModule
  ]
})
export class DomainOrdersModule {}
