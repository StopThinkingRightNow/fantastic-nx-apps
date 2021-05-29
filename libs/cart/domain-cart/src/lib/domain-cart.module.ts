import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomainShellModule } from '@rs-form/domain-shell';
import { CartComponent } from './cart/cart.component';

@NgModule({
  imports: [CommonModule, DomainShellModule],
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
