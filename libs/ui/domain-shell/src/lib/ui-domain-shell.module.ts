import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UiPresentationUserInterfaceModule } from "@rs-apps/ui/presentation/user-interface";

@NgModule({
  imports: [CommonModule, UiPresentationUserInterfaceModule],
  exports: [UiPresentationUserInterfaceModule],
})
export class UiDomainShellModule {}
