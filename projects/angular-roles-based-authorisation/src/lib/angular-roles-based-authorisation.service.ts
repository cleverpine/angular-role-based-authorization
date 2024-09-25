import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AngularRolesBasedAuthorisationService {
  private userRoles: string[] = [];

  /**
   * Method to set user roles after login
   * @param roles user roles
   * @returns void
   */
  setUserRoles(roles: string[]): void {
    this.userRoles = roles;
  }

  /**
   * Method to check if the user has any of the required roles
   * @returns boolean
   */ 
  hasAccess(requiredRoles: string[]): boolean {
    if (requiredRoles.length === 0 || this.userRoles.length === 0) {
      return true;
    }

    return requiredRoles.some(role => this.userRoles.includes(role));
  }
}
