import { async, TestBed } from '@angular/core/testing';
import { DomainCartModule } from './domain-cart.module';

describe('DomainCartModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DomainCartModule],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(DomainCartModule).toBeDefined();
  });
});
