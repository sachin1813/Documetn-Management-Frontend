import { TestBed } from '@angular/core/testing';
import { CommonService } from './common.service';

describe('CommonService', () => {
  let service: CommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set and get token', () => {
    service.token = 'abc123';
    expect(service.token).toBe('abc123');
  });

  it('should clear token', () => {
    service.token = 'test';
    service.clearToken();
    expect(service.token).toBe('');
  });
});
