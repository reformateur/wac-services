import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceEquipementAndTechnologiesComponent } from './service-equipement-and-technologies.component';

describe('ServiceEquipementAndTechnologiesComponent', () => {
  let component: ServiceEquipementAndTechnologiesComponent;
  let fixture: ComponentFixture<ServiceEquipementAndTechnologiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceEquipementAndTechnologiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceEquipementAndTechnologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
