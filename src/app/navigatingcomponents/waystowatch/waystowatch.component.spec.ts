import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaystowatchComponent } from './waystowatch.component';

describe('WaystowatchComponent', () => {
  let component: WaystowatchComponent;
  let fixture: ComponentFixture<WaystowatchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WaystowatchComponent]
    });
    fixture = TestBed.createComponent(WaystowatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
