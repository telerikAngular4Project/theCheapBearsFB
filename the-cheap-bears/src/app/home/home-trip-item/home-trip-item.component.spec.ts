import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTripItemComponent } from './home-trip-item.component';

describe('HomeTripItemComponent', () => {
  let component: HomeTripItemComponent;
  let fixture: ComponentFixture<HomeTripItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTripItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTripItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
