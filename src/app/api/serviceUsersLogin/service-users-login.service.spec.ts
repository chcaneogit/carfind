import { TestBed } from '@angular/core/testing';

import { ServiceUserslOgin } from './service-users-login.service';

describe('UsersLoginService', () => {
  let service: ServiceUserslOgin;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceUserslOgin);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
