import { TestBed } from '@angular/core/testing';

import { GroepService } from './groep.service';

describe('GroepService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GroepService = TestBed.get(GroepService);
    expect(service).toBeTruthy();
  });
});
