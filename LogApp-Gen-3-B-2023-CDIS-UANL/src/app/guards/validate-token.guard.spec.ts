import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';
import { ValidateTokenGuard } from './validate-token.guard';

describe('validateTokenGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
      TestBed.runInInjectionContext(() => ValidateTokenGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
