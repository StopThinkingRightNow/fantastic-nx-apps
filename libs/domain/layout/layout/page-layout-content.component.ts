import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rs-page-layout-content',
  template: '<ng-content></ng-content>',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'rs-page-layout-content' }
})
export class PageLayoutContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
