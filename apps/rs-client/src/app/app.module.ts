import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { DomainCartModule } from "@rs-form/domain-cart";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule, Routes } from "@angular/router";
import { AppContainerComponent } from "./app-container/app-container.component";
import { DomainShellModule } from "@rs-form/domain-shell";
import { DomainProductsModule } from "@rs-form/domain-products";
import { DomainOrdersModule } from "@rs-form/domain-orders";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
// import { NbThemeModule, NbLayoutModule, NbUserModule, NbCardModule } from '@nebular/theme';
// import { NbEvaIconsModule } from '@nebular/eva-icons';
import { MatListModule } from "@angular/material/list";
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { LoginComponent } from "libs/domain/login/login/login.component";
import {MatBadgeModule} from '@angular/material/badge';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: "orders",
    loadChildren: () =>
      import("@rs-form/domain-orders").then((m) => m.DomainOrdersModule),
  },
  {
    path: "cart",
    loadChildren: () =>
      import("@rs-form/domain-cart").then((m) => m.DomainCartModule),
  },
  {
    path: "products",
    loadChildren: () =>
      import("@rs-form/domain-products").then((m) => m.DomainProductsModule),
  },
  {
    path: 'form',
    component: AppContainerComponent
  }
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
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatDividerModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatBadgeModule
    // NbThemeModule.forRoot({ name: 'default' }),
    // NbLayoutModule,
    // NbCardModule,
    // NbUserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
