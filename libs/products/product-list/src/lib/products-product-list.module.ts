import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './feature-shell/product-list/product-list.component';
import { UiDomainShellModule } from '@rs-form/domain-shell/ui';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'products',
    component: ProductListComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), UiDomainShellModule],
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
