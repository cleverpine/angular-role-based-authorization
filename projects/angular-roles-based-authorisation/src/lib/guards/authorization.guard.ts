import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, UrlTree } from '@angular/router';
 
import { Observable, of } from 'rxjs';

import { AngularRolesBasedAuthorisationService } from "../angular-roles-based-authorisation.service";
import { ROUTE_DATA_ROLES_PARAM, ROUTE_NO_ACCESS_PAGE } from "../constants";
 
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
    let requiredRoles = route.data[ROUTE_DATA_ROLES_PARAM];

    if (!Array.isArray(requiredRoles)) {
      requiredRoles = [requiredRoles];
    }

    if (!this.rolesBasedAuthorisationService.hasAccess(requiredRoles)) {
      this.router.navigate([ROUTE_NO_ACCESS_PAGE]);
      return of(false);
    }

    return of(true);
  }
}