import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BicyclesListComponent } from './bicycles-list.component';

describe('BicyclesListComponent', () => {
  let component: BicyclesListComponent;
  let fixture: ComponentFixture<BicyclesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BicyclesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BicyclesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
