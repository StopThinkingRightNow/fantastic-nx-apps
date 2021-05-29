import { async, TestBed } from '@angular/core/testing';
import { DomainCustomersModule } from './domain-customers.module';

describe('DomainCustomersModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DomainCustomersModule],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(DomainCustomersModule).toBeDefined();
  });
});
