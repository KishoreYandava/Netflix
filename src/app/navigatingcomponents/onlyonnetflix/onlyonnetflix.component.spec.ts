import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlyonnetflixComponent } from './onlyonnetflix.component';

describe('OnlyonnetflixComponent', () => {
  let component: OnlyonnetflixComponent;
  let fixture: ComponentFixture<OnlyonnetflixComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnlyonnetflixComponent]
    });
    fixture = TestBed.createComponent(OnlyonnetflixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
