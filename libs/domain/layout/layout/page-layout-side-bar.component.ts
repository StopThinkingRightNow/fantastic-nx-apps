import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rs-page-layout-side-bar',
  template: '<ng-content></ng-content>',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'rs-page-layout-side-bar' }
})
export class PageSideBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
