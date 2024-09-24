import { TestBed } from '@angular/core/testing';

import { AngularRolesBasedAuthorisationService } from './angular-roles-based-authorisation.service';

describe('AngularRolesBasedAuthorisationService', () => {
  let service: AngularRolesBasedAuthorisationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularRolesBasedAuthorisationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
