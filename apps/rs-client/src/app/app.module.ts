import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DomainCartModule } from '@rs-form/domain-cart';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AppContainerComponent } from './app-container/app-container.component';
import { DomainShellModule } from '@rs-form/domain-shell';
import { DomainProductsModule } from '@rs-form/domain-products';
import { DomainOrdersModule } from '@rs-form/domain-orders';

const routes: Routes = [
  {
    path: '',
    component: AppContainerComponent,
    children: [
      {
        path: 'orders',
        loadChildren: () => import('@rs-form/domain-orders').then((m) => m.DomainOrdersModule)
      },
      {
        path: 'products',
        loadChildren: () => import('@rs-form/domain-products').then((m) => m.DomainProductsModule)
      },
    ],
  },
];

@NgModule({
  declarations: [AppComponent, AppContainerComponent],
  imports: [
    BrowserModule,
    DomainShellModule,
    DomainProductsModule,
    DomainOrdersModule,
    DomainCartModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
