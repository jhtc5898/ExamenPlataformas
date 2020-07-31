import { TestBed } from '@angular/core/testing';

import { ServicioexamenService } from './servicioexamen.service';

describe('ServicioexamenService', () => {
  let service: ServicioexamenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioexamenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
