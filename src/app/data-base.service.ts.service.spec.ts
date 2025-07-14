import { TestBed } from '@angular/core/testing';

import { DataBaseServiceTsService } from './data-base.service.ts.service';

describe('DataBaseServiceTsService', () => {
  let service: DataBaseServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataBaseServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
