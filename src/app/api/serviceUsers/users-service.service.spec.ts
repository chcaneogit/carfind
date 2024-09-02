import { TestBed } from '@angular/core/testing';

import { ServiceUsersService } from './users-service.service';

describe('UsersServiceService', () => {
  let service: ServiceUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
