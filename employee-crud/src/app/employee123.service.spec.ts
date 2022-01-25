import { TestBed } from '@angular/core/testing';

import { Employee123Service } from './employee123.service';

describe('Employee123Service', () => {
  let service: Employee123Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Employee123Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
