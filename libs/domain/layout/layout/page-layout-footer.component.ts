import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rs-page-layout-footer',
  template: '<ng-content></ng-content>',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'rs-page-layout-footer' }
})
export class PageLayoutFooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
