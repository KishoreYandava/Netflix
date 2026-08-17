import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediacentreComponent } from './mediacentre.component';

describe('MediacentreComponent', () => {
  let component: MediacentreComponent;
  let fixture: ComponentFixture<MediacentreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MediacentreComponent]
    });
    fixture = TestBed.createComponent(MediacentreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
