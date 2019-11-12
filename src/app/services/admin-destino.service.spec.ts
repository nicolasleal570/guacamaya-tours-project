import { TestBed } from '@angular/core/testing';

import { AdminDestinoService } from './admin-destino.service';

describe('AdminDestinoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminDestinoService = TestBed.get(AdminDestinoService);
    expect(service).toBeTruthy();
  });
});
