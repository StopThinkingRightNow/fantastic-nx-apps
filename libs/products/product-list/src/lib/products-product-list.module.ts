import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './feature-shell/product-list/product-list.component';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'products',
    component: ProductListComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [
    ProductListComponent
  ],
  exports: [
    ProductListComponent,
    RouterModule
  ],
  entryComponents: [
    ProductListComponent
  ],
})
export class ProductsProductListModule {}
