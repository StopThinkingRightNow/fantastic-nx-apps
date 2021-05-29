import { async, TestBed } from '@angular/core/testing';
import { DomainOrdersModule } from './domain-orders.module';

describe('DomainOrdersModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DomainOrdersModule],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(DomainOrdersModule).toBeDefined();
  });
});
