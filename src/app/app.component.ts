import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularRolesBasedAuthorisationComponent } from "angular-roles-based-authorisation";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AngularRolesBasedAuthorisationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
