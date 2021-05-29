import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsProductListModule } from '../../..//product-list/src';

@NgModule({
  imports: [CommonModule, ProductsProductListModule],
  exports: [ ProductsProductListModule ],
})
export class DomainProductsModule {}
