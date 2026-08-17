import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorrelationsComponent } from './investorrelations.component';

describe('InvestorrelationsComponent', () => {
  let component: InvestorrelationsComponent;
  let fixture: ComponentFixture<InvestorrelationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvestorrelationsComponent]
    });
    fixture = TestBed.createComponent(InvestorrelationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
