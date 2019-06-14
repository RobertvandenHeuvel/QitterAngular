import { TestBed } from '@angular/core/testing';

import { ReactieService } from './reactie.service';

describe('ReactieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReactieService = TestBed.get(ReactieService);
    expect(service).toBeTruthy();
  });
});
