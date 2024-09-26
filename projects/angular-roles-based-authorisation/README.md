# Angular Roles Based Authorisation

The purpose of this library is to provide no access page, guard and authorisation service which handles whether a user is allowed to enter a page based on his roles. It provides the following: 

- No access page
- Roles based authorisation service
- Authorisation guard

## Installation

Angular Roles Based Authorisation library is available through npm. Install it by using the following command in the terminal:

```
npm install angular-roles-based-authorisation
```

You should now be able to see the dependency in the `package.json` file.

## Usage

After successful instalation, start by importing `AngularRolesBasedAuthorisationService` in the Angular module:

```
import { AngularRolesBasedAuthorisationService } from "angular-roles-based-authorisation";
````

Create `initializeApp` function which will run required initialisation logic when the application starts, for example, login, translation, etc. After the user is logged in, define user roles during application startup by using `angularRolesBasedAuthorisationService.setUserRoles()` function.

```
export function initializeApp(
  angularRolesBasedAuthorisationService: AngularRolesBasedAuthorisationService
) {
  return () => {
    // Set user roles at app initialization
    angularRolesBasedAuthorisationService.setUserRoles(['user']);
  };
}
```

<b>NOTE</b>: Register the `APP_INITIALIZER` to the `providers` array of the Angular module to ensure that the initialization logic runs before the application starts:

```
providers: [    
    {      
        provide: APP_INITIALIZER,
        useFactory: initializeApp,
        deps: [AngularRolesBasedAuthorisationService],
        multi: true
        
    }  
]
```

After we have set user roles, we have to set up the application routing by assigning required roles that can acces the given route and use the authorisation guard. Here is an example of how to do that:

```
import { AuthorisationGuard, NoAccessPageComponent } from "angular-roles-based-authorisation";


const routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: someAdminPath,
    component: someAdminComponent,
    canActivate: [AuthorisationGuard],
    data: { roles: 'admin' }
  },
  {
    path: 'someUserPath',
    component: someUserComponent,
    canActivate: [AuthorisationGuard],
    data: { roles: ['admin', 'user'] }
  },
  { 
    path: 'no-access', 
    component: NoAccessPageComponent,
    data: { contactPerson: 'personToContact' }
  },
];
```

`AuthorisationGuard` checks the current user's roles (previously set in the angular module) and only allows access if the user has the required roles specified in the `data.roles` property.

### Defining Roles in Route Data:

You can pass a string or an array of roles depending on your access requirements. For example:

- `data: { roles: 'admin' }`: This defines that only users with the admin role can access the `someAdminPath` route.

- `data: { roles: ['admin', 'user'] }`: This allows users with either the admin or user role to access the `someUserPath` route. 


### No access page: 

When a user tries to access a restricted route without the required roles, they will be redirected to the `NoAccessPageComponent`.

- `path: 'no-access'`: The route for the no-access page should be explicitly set to `no-access` because this path is hardcoded in the library’s authorisation guard to handle access denial.

- `data: { contactPerson: 'adminContact' }`: You can pass a custom `contactPerson` through the route's data property. This allows you to dynamically display a person to contact on the no access page.
