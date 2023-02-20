import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsLandingComponent } from './analytics-landing.component';

describe('AnalyticsLandingComponent', () => {
  let component: AnalyticsLandingComponent;
  let fixture: ComponentFixture<AnalyticsLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalyticsLandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalyticsLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
