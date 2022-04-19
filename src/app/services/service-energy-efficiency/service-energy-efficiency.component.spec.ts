import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceEnergyEfficiencyComponent } from './service-energy-efficiency.component';

describe('ServiceEnergyEfficiencyComponent', () => {
  let component: ServiceEnergyEfficiencyComponent;
  let fixture: ComponentFixture<ServiceEnergyEfficiencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceEnergyEfficiencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceEnergyEfficiencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
