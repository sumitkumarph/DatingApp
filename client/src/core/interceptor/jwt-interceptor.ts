import { HttpInterceptorFn } from '@angular/common/http';
import { AccountService } from '../services/account-service';
import { inject } from '@angular/core';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  const accountServe = inject(AccountService)

  const user = accountServe.currentUser();

  if(user){
    req = req.clone({
      setHeaders:{
        Authorization: `Bearer ` + user?.token
      }
    })
  }
  return next(req);
};
