// api.service.spec.ts

import { TestBed } from '@angular/core/testing';
import { ApiService } from './api.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CommonService } from './common.service';
import { environment } from '../enviroment/enviroment';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;
  let commonService: CommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService, CommonService]
    });
    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
    commonService = TestBed.inject(CommonService);
    commonService.token = 'mock-token';
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should perform login', () => {
    const mockObj = { username: 'user', password: 'pass' };
    const mockResponse = { token: 'abc123' };

    service.login(mockObj).subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(`${environment.api_url}login`);
    expect(req.request.method).toBe('POST');
    req.flush(mockResponse);
  });

  it('should fetch all user details', () => {
    const mockStatus = 'active';
    const mockResponse = [{ id: 1, name: 'User' }];

    service.allUserDetails(mockStatus).subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(`${environment.api_url}users/users/${mockStatus}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('should fetch all documents', () => {
    const mockResponse = [{ doc_id: 1, title: 'Doc' }];

    service.allDocument().subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(`${environment.api_url}documents`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('should update document details', () => {
    const mockDocId = '123';
    const mockObj = { title: 'Updated' };
    const mockResponse = { success: true };

    service.updateDocumentDetails(mockDocId, mockObj).subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(`${environment.api_url}documents/${mockDocId}`);
    expect(req.request.method).toBe('PUT');
    req.flush(mockResponse);
  });

  it('should delete document', () => {
    const mockObj = { doc_id: '123' };
    const mockResponse = { success: true };

    service.deleteDocument(mockObj).subscribe(response => {
      expect(response).toEqual(response);
    });

    const req = httpMock.expectOne(`${environment.api_url}documents/123`);
    expect(req.request.method).toBe('DELETE');
    req.flush(mockResponse);
  });

  it('should update user details', () => {
    const mockUserId = 'u1';
    const mockData = { user_type: 'admin', status: 'active' };
    const mockResponse = { success: true };

    service.updateUserDetails(mockUserId, mockData).subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(`${environment.api_url}users/users/${mockUserId}`);
    expect(req.request.method).toBe('PUT');
    req.flush(mockResponse);
  });
});
