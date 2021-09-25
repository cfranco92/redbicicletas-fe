import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BicycleUpdateComponent } from './bicycle-update.component';

describe('BicycleUpdateComponent', () => {
  let component: BicycleUpdateComponent;
  let fixture: ComponentFixture<BicycleUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BicycleUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BicycleUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
