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
import {MatListModule} from '@angular/material/list';


const routes: Routes = [
  {
    path: "",
    component: AppContainerComponent,
    children: [
      {
        path: "orders",
        loadChildren: () =>
          import("@rs-form/domain-orders").then((m) => m.DomainOrdersModule),
      },
      {
        path: "products",
        loadChildren: () =>
          import("@rs-form/domain-products").then(
            (m) => m.DomainProductsModule
          ),
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
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule
    // NbThemeModule.forRoot({ name: 'default' }),
    // NbLayoutModule,
    // NbCardModule,
    // NbUserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
