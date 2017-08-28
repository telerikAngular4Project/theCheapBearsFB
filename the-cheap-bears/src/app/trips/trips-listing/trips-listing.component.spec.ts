import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripsListingComponent } from './trips-listing.component';

describe('TripsListingComponent', () => {
  let component: TripsListingComponent;
  let fixture: ComponentFixture<TripsListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripsListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
