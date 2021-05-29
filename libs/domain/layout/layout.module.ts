import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLayoutContainerComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddressInfoComponent } from './address-info/address-info.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatGridListModule } from '@angular/material/grid-list';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavigationComponent } from './navigation/navigation.component';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PageLayoutContentComponent } from './layout/page-layout-content.component';
import { PageLayoutErrorComponent } from './layout/page-layout-error-component';
import { PageSideMenuComponent } from './layout/page-layout-side-menu.component';
import { PageLayoutFooterComponent } from './layout/page-layout-footer.component';
import { PageLayoutHeaderComponent } from './layout/page-layout-header.component';

@NgModule({
  declarations: [
    PageLayoutContainerComponent,
    PageLayoutErrorComponent,
    PageLayoutHeaderComponent,
    PageLayoutFooterComponent,
    PageLayoutContentComponent,
    PageSideMenuComponent,
    DashboardComponent,
    AddressInfoComponent,
    NavigationComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatTableModule,
    MatSelectModule,
    MatRadioModule,
    MatGridListModule,
    DragDropModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
  ],
  exports: [
    PageLayoutContainerComponent,
    PageLayoutErrorComponent,
    PageLayoutHeaderComponent,
    PageLayoutFooterComponent,
    PageLayoutContentComponent,
    PageSideMenuComponent,
    DashboardComponent,
    AddressInfoComponent,
    NavigationComponent,
  ],
})
export class LayoutModule {}
