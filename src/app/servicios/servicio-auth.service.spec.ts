import { TestBed } from '@angular/core/testing';

import { ServicioAuthService } from './servicio-auth.service';

describe('ServicioAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicioAuthService = TestBed.get(ServicioAuthService);
    expect(service).toBeTruthy();
  });
});
