import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularRolesBasedAuthorisationComponent } from './angular-roles-based-authorisation.component';

describe('AngularRolesBasedAuthorisationComponent', () => {
  let component: AngularRolesBasedAuthorisationComponent;
  let fixture: ComponentFixture<AngularRolesBasedAuthorisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularRolesBasedAuthorisationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularRolesBasedAuthorisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
