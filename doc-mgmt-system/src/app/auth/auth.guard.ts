import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CommonService } from '../core/common.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const common = inject(CommonService);
  const token = common.token


  if (token) {
    return true; // Allow access
  } else {
    router.navigate(['/login']); // Redirect to login
    return false; // Block access
  }

  
};
