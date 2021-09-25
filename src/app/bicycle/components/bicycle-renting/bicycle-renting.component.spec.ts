import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BicycleRentingComponent } from './bicycle-renting.component';

describe('BicycleRentingComponent', () => {
  let component: BicycleRentingComponent;
  let fixture: ComponentFixture<BicycleRentingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BicycleRentingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BicycleRentingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
