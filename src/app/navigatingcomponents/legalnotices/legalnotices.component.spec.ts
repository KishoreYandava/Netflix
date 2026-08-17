import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalnoticesComponent } from './legalnotices.component';

describe('LegalnoticesComponent', () => {
  let component: LegalnoticesComponent;
  let fixture: ComponentFixture<LegalnoticesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LegalnoticesComponent]
    });
    fixture = TestBed.createComponent(LegalnoticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
