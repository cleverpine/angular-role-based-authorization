# AngularRoleBasedAuthorization

An example project of how to use `AngularRolesBasedAuthorisation` library.

## Development server

Run `npm install` to install required packages.
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

## Changes to library

When making changes to the library, run `ng build angular-roles-based-authorisation` in order to be able to test the changes in the example project.

## Application content

The application contains the following:

- Two components: `UserPortalComponent` & `AdminPortalComponent` which serve for testing different user roles.
- App routing to both components using the library guard.
- Hardcoding user roles through the `app.module` when the application is initialised.