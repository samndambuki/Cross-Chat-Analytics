import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YournameComponent } from './yourname.component';

describe('YournameComponent', () => {
  let component: YournameComponent;
  let fixture: ComponentFixture<YournameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [YournameComponent]
    });
    fixture = TestBed.createComponent(YournameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
