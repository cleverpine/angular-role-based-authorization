import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, UrlTree } from '@angular/router';
 
import { Observable, of } from 'rxjs';

import { AngularRolesBasedAuthorisationService } from "../angular-roles-based-authorisation.service";
import { NO_ACCESS_ROUTE, ROLES } from "../constants";
 
@Injectable({
  providedIn: 'root',
})
export class AuthorizationGuard {
  constructor(
    private router: Router,
    private rolesBasedAuthorisationService: AngularRolesBasedAuthorisationService
  ) {}
 
  canActivate(
    route: ActivatedRouteSnapshot,
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {    
    return this.isAuthorized(route);
  }
 
  isAuthorized(route: ActivatedRouteSnapshot): Observable<boolean> {
    const requiredRoles = route.data[ROLES] as string[];

    this.rolesBasedAuthorisationService.setRequiredRoles(requiredRoles);

    if (!this.rolesBasedAuthorisationService.hasAccess()) {
      this.router.navigate([NO_ACCESS_ROUTE]);
      return of(false);
    }

    return of(true);
  }
}