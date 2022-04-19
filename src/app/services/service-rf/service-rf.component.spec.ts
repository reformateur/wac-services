import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceRFComponent } from './service-rf.component';

describe('ServiceRFComponent', () => {
  let component: ServiceRFComponent;
  let fixture: ComponentFixture<ServiceRFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceRFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceRFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
