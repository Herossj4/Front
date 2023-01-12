import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirDatepickerComponent } from './air-datepicker.component';

describe('AirDatepickerComponent', () => {
  let component: AirDatepickerComponent;
  let fixture: ComponentFixture<AirDatepickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirDatepickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AirDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
