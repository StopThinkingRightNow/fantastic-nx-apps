import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomainShellModule } from '@rs-form/domain-shell';
import { CartComponent } from './cart/cart.component';
import { RouterModule, Routes } from '@angular/router';
import { DataStoreModule } from '@rs-apps/data-store';

const routes: Routes = [
  {
    path: 'cart-list',
    component: CartComponent
  }
];

@NgModule({
  imports: [CommonModule, DomainShellModule, RouterModule.forChild(routes), DataStoreModule],
  declarations: [
    CartComponent
  ],
  exports: [
    CartComponent
  ],
  entryComponents: [
    CartComponent
  ],
})
export class DomainCartModule {}
