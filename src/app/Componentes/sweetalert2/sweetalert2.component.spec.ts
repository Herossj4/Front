import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sweetalert2Component } from './sweetalert2.component';

describe('Sweetalert2Component', () => {
  let component: Sweetalert2Component;
  let fixture: ComponentFixture<Sweetalert2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sweetalert2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sweetalert2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
