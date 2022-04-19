import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceEMCComponent } from './service-emc.component';

describe('ServiceEMCComponent', () => {
  let component: ServiceEMCComponent;
  let fixture: ComponentFixture<ServiceEMCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceEMCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceEMCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
