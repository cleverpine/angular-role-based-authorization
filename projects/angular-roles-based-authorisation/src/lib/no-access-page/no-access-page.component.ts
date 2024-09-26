import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { ROUTE_DATA_CONTACT_PERSON } from "../constants";

@Component({
  selector: 'no-access-page',
  standalone: true,
  templateUrl: './no-access-page.component.html',
  styleUrls: ['./no-access-page.component.scss'],
})
export class NoAccessPageComponent implements OnInit {
  contactPerson: string | string[] = '';

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) => {
      this.contactPerson = data[ROUTE_DATA_CONTACT_PERSON];
    });
  }
}
