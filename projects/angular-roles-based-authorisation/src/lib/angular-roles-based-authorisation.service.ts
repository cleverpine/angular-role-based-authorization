import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AngularRolesBasedAuthorisationService {
  private userRoles: string[] = [];
  private requiredRoles: string[] = [];

  /**
   * Method to set user roles after login
   * @param roles user roles
   * @returns void
   */
  setUserRoles(roles: string[]): void {
    this.userRoles = roles;
  }

   /**
   * Method to set required user roles to access a page
   * @param roles user roles
   * @returns void
   */ 
  setRequiredRoles(roles: string[]): void {
    this.requiredRoles = roles;
  }

  /**
   * Method to check if the user has any of the required roles
   * @returns boolean
   */ 
  hasAccess(): boolean {
    if (this.requiredRoles.length === 0 || this.userRoles.length === 0) {
      return false;
    }

    return this.requiredRoles.some(role => this.userRoles.includes(role));
  }
}
