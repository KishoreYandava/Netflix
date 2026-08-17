import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeedtestComponent } from './speedtest.component';

describe('SpeedtestComponent', () => {
  let component: SpeedtestComponent;
  let fixture: ComponentFixture<SpeedtestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpeedtestComponent]
    });
    fixture = TestBed.createComponent(SpeedtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
