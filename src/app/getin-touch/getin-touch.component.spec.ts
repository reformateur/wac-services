import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetinTouchComponent } from './getin-touch.component';

describe('GetinTouchComponent', () => {
  let component: GetinTouchComponent;
  let fixture: ComponentFixture<GetinTouchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetinTouchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetinTouchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
