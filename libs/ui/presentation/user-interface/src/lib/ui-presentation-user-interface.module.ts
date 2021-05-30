import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item.component';
import { AppCommonModule } from '@rs-form/common';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [CommonModule, AppCommonModule, MatCardModule, MatIconModule],
  declarations: [
    ListComponent,
    ItemComponent,
  ],
  exports: [
    ListComponent,
    ItemComponent
  ],
  entryComponents: [
    ListComponent,
    ItemComponent
  ],
})
export class UiPresentationUserInterfaceModule {}
