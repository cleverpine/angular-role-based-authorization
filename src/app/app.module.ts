import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { AngularRolesBasedAuthorisationService } from "angular-roles-based-authorisation";
import { AdminPortalComponent } from "./admin-portal/admin-portal.component";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UserPortalComponent } from "./user-portal/user-portal.component";

export function initializeApp(
  // config, api, auth, translate services
  angularRolesBasedAuthorisationService: AngularRolesBasedAuthorisationService
) {
  return () => {
    // await firstValueFrom(authService.login());
    angularRolesBasedAuthorisationService.setUserRoles(['user']);
  };
}

@NgModule({
  declarations: [
    AppComponent,
    AdminPortalComponent,
    UserPortalComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule, 
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [
        // config, api, auth, translate services
        AngularRolesBasedAuthorisationService
      ],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
