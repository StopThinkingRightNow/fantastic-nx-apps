import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderListComponent } from './feature-shell/order-list/order-list.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'orders',
    component: OrderListComponent
  }
];

export class AppRoutingModule { }
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [
    OrderListComponent
  ],
  exports: [
    OrderListComponent,
    RouterModule
  ],
  entryComponents: [
    OrderListComponent
  ],
})
export class OrdersOrdersModule {}
