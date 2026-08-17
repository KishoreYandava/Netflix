import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookiepreferencesComponent } from './cookiepreferences.component';

describe('CookiepreferencesComponent', () => {
  let component: CookiepreferencesComponent;
  let fixture: ComponentFixture<CookiepreferencesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CookiepreferencesComponent]
    });
    fixture = TestBed.createComponent(CookiepreferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
