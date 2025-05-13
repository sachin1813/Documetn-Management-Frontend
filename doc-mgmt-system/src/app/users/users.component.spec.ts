import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsersComponent } from './users.component';
import { ApiService } from '../core/api.service';
import { Router } from '@angular/router';
import { CommonService } from '../core/common.service';
import { of, throwError } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let apiService: jasmine.SpyObj<ApiService>;
  let commonService: jasmine.SpyObj<CommonService>;

  beforeEach(async () => {
    const apiSpy = jasmine.createSpyObj('ApiService', ['allUserDetails', 'updateUserDetails']);
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    const commonSpy = jasmine.createSpyObj('CommonService', [], { componentType: 'user' });

    await TestBed.configureTestingModule({
      imports: [UsersComponent],
      providers: [
        { provide: ApiService, useValue: apiSpy },
        { provide: Router, useValue: routerSpy },
        { provide: CommonService, useValue: commonSpy }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    apiService = TestBed.inject(ApiService) as jasmine.SpyObj<ApiService>;
    commonService = TestBed.inject(CommonService) as jasmine.SpyObj<CommonService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should set componentType and fetch users', () => {
      const mockUsers = [{ user_id: '1', login_id: 'abc', name: 'John', status: 'ACTIVE', user_type: 'ADMIN', username: 'john' }];
      apiService.allUserDetails.and.returnValue(of({ users: mockUsers }));

      component.ngOnInit();

      expect(commonService.componentType).toBe('user');
      expect(apiService.allUserDetails).toHaveBeenCalledWith('ALL');
    });

    it('should handle error on getAllUser', () => {
      spyOn(window, 'alert');
      apiService.allUserDetails.and.returnValue(throwError(() => new Error('error')));

      component.getAllUser('ALL');

      expect(window.alert).toHaveBeenCalledWith(jasmine.any(Error));
    });
  });

  describe('onEdit', () => {
    it('should set editData and open edit modal', () => {
      const user = { login_id: '1', username: 'test', user_id: 'u1', name: 'Test', status: 'ACTIVE', user_type: 'ADMIN' };
      component.onEdit(user);

      expect(component.editData.username).toBe('test');
      expect(component.showEditModal).toBeTrue();
    });
  });

  describe('submitEdit', () => {
    it('should update user and close modal on success', () => {
      const user = { user_id: 'u1', login_id: '1', username: 'edited', name: 'Test', status: 'ACTIVE', user_type: 'ADMIN' };
      component.editData = { ...user };
      component.userList = [{ ...user, username: 'old' }];

      apiService.updateUserDetails.and.returnValue(of({ success: true }));

      component.submitEdit();

      expect(apiService.updateUserDetails).toHaveBeenCalledWith('u1', user);
      expect(component.userList[0].username).toBe('edited');
      expect(component.showEditModal).toBeFalse();
    });

    it('should close modal on error', () => {
      const user = { user_id: 'u1', login_id: '1', username: 'edited', name: 'Test', status: 'ACTIVE', user_type: 'ADMIN' };
      component.editData = { ...user };

      apiService.updateUserDetails.and.returnValue(throwError(() => new Error('fail')));

      component.submitEdit();

      expect(component.showEditModal).toBeFalse();
    });
  });

  describe('Modal methods', () => {
    it('closeModal should reset all modals', () => {
      component.showAddModal = true;
      component.showEditModal = true;
      component.showDeleteModal = true;

      component.closeModal();

      expect(component.showAddModal).toBeFalse();
      expect(component.showEditModal).toBeFalse();
      expect(component.showDeleteModal).toBeFalse();
    });

    it('openAddModal should open add modal', () => {
      component.openAddModal();
      expect(component.showAddModal).toBeTrue();
    });
  });
});
