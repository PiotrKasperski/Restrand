import { TestBed } from '@angular/core/testing';

import { LoginShareService } from './login-share.service';

describe('LoginShareService', () => {
  let service: LoginShareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginShareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
