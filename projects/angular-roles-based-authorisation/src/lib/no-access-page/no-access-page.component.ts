import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

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
      const constactPerson = data['contactPerson'] as string[];
      this.contactPerson = constactPerson;
    });
  }
}
