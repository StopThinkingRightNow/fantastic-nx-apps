import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rs-page-layout-header',
  template: '<ng-content></ng-content>',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'rs-page-layout-header' }
})
export class PageLayoutHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
