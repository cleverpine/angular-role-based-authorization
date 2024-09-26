import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';


import { AuthorisationGuard, NoAccessPageComponent } from "angular-roles-based-authorisation";
import { AdminPortalComponent } from "./admin-portal/admin-portal.component";
import { UserPortalComponent } from "./user-portal/user-portal.component";

export const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: 'admin-portal',
    component: AdminPortalComponent,
    canActivate: [AuthorisationGuard],
    data: { roles: 'admin' }
  },
  {
    path: 'user-portal',
    component: UserPortalComponent,
    canActivate: [AuthorisationGuard],
    data: { roles: ['admin', 'user'] }
  },
  { 
    path: 'no-access', 
    component: NoAccessPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
