import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateinformationComponent } from './corporateinformation.component';

describe('CorporateinformationComponent', () => {
  let component: CorporateinformationComponent;
  let fixture: ComponentFixture<CorporateinformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CorporateinformationComponent]
    });
    fixture = TestBed.createComponent(CorporateinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
