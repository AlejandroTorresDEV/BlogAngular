import { TestBed } from '@angular/core/testing';

import { ServicioPostService } from './servicio-post.service';

describe('ServicioPostService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicioPostService = TestBed.get(ServicioPostService);
    expect(service).toBeTruthy();
  });
});
